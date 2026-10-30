import React, { useEffect, useRef } from 'react';

export default function PremiumGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    // Globe points generation (Perfect Fibonacci Sphere)
    const points = [];
    const targetPoints = 2500; 
    
    for (let i = 0; i < targetPoints; i++) {
      const y = 1 - (i / (targetPoints - 1)) * 2; 
      const r = Math.sqrt(1 - y * y);
      const theta = i * Math.PI * (3 - Math.sqrt(5)); // Golden angle ~2.399963
      
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      // Pre-calculate color hash so it stays consistent
      const colorHash = Math.abs(x * 111 + y * 222 + z * 333) % 1;
      points.push({ x, y, z, colorHash, sxOffset: 0, syOffset: 0, vx: 0, vy: 0 });
    }

    // Interaction & Animation state
    let rotY = 0;
    let velocity = 0.0035;
    const idleSpin = 0.0035;
    let isDragging = false;
    let lastX = 0;
    
    // Mouse hover repulsion tracking
    let mouseX = -1000;
    let mouseY = -1000;

    let width = 0;
    let height = 0;
    let radius = 0;
    let cx = 0;
    let cy = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      cx = width / 2;
      cy = height / 2;
      radius = Math.min(width, height) * 0.40; // Clean safe radius so full sphere is 100% visible
    };

    window.addEventListener('resize', resize);
    resize();

    // Render loop
    let reqId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!isDragging) {
        velocity += (idleSpin - velocity) * 0.02;
      }
      rotY += velocity;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const tilt = -0.32;
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);

      // Sort points so back draws first
      const projected = points.map(p => {
        // Rotate around Y
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;
        // Tilt around X
        const ry = p.y * cosX - rz * sinX;
        const finalZ = p.y * sinX + rz * cosX;

        return { orig: p, rx, ry, rz: finalZ, colorHash: p.colorHash };
      });

      projected.sort((a, b) => a.rz - b.rz);

      for (let p of projected) {
        const orig = p.orig;
        const depth = (p.rz + 1) / 2;
        const pf = 0.86 + depth * 0.28;
        
        const screenX = cx + p.rx * radius * pf;
        const screenY = cy + p.ry * radius * pf;
        const dotR = (0.5 + depth * 1.2) * (width > 500 ? 1.4 : 1.1);

        // Interactive smooth mouse repulsion (Physics based)
        const currentX = screenX + orig.sxOffset;
        const currentY = screenY + orig.syOffset;
        
        const dx = currentX - mouseX;
        const dy = currentY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 180; // Large area of effect
        
        if (dist < repelRadius && dist > 0.1) {
          const force = (repelRadius - dist) / repelRadius;
          // Apply outward velocity
          orig.vx += (dx / dist) * force * 2.5; 
          orig.vy += (dy / dist) * force * 2.5;
        }

        // Spring mechanics pulling particle back to 0,0 offset
        orig.vx += -orig.sxOffset * 0.04;
        orig.vy += -orig.syOffset * 0.04;

        // Friction / Damping
        orig.vx *= 0.82;
        orig.vy *= 0.82;

        // Apply velocity to offset
        orig.sxOffset += orig.vx;
        orig.syOffset += orig.vy;

        const finalScreenX = screenX + orig.sxOffset;
        const finalScreenY = screenY + orig.syOffset;

        ctx.beginPath();
        ctx.arc(finalScreenX, finalScreenY, dotR, 0, Math.PI * 2);
        
        // Depth coloring with multi-colors matching user screenshot
        let fillStyle = '';
        if (p.rz > 0) {
          const alpha = 0.4 + depth * 0.6;
          if (p.colorHash < 0.3) fillStyle = `rgba(234, 134, 48, ${alpha})`; // Orange
          else if (p.colorHash < 0.5) fillStyle = `rgba(74, 192, 255, ${alpha})`; // Blue
          else if (p.colorHash < 0.7) fillStyle = `rgba(96, 214, 167, ${alpha})`; // Green
          else fillStyle = `rgba(255, 255, 255, ${alpha})`; // White
        } else {
          // Dimmer back points (dark blue-greyish to match dark theme)
          const alpha = 0.1 + depth * 0.2;
          fillStyle = `rgba(100, 120, 150, ${alpha})`; 
        }
        
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }

      reqId = requestAnimationFrame(render);
    };
    render();

    // Drag handlers
    const onPointerDown = (e) => {
      isDragging = true;
      velocity = 0;
      lastX = e.clientX || (e.touches && e.touches[0].clientX);
      canvas.style.cursor = 'grabbing';
    };
    
    const onPointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      if (clientX === undefined) return;
      const dx = clientX - lastX;
      lastX = clientX;
      
      const step = dx * 0.006;
      rotY += step;
      velocity = step;
    };
    
    const onPointerUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };
    
    // Mouse Tracking for Repulsion
    const trackMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      if (clientX !== undefined && clientY !== undefined) {
        mouseX = clientX - rect.left;
        mouseY = clientY - rect.top;
      }
    };
    const untrackMouse = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    
    canvas.addEventListener('mousemove', trackMouse);
    canvas.addEventListener('mouseleave', untrackMouse);
    
    canvas.addEventListener('touchstart', onPointerDown, {passive: true});
    window.addEventListener('touchmove', onPointerMove, {passive: true});
    window.addEventListener('touchend', onPointerUp);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(reqId);
      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
          cursor: 'grab',
          touchAction: 'none'
        }} 
      />
    </div>
  );
}
