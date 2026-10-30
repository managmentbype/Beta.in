import React, { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    // Globe points generation
    const points = [];
    const targetPoints = 1400;
    const oversample = targetPoints * 4; 
    let i = 0;
    
    while (points.length < targetPoints && i < oversample) {
      const y = 1 - (i / oversample) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.399963;
      
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      const lat = Math.asin(y);
      const lon = Math.atan2(z, x);
      
      const s = Math.sin(lat * 3.1) * Math.cos(lon * 2.2) + 
                Math.sin(lon * 1.3 + 1.1) * Math.cos(lat * 1.7) + 
                0.6 * Math.sin((lat + lon) * 4.3);
                
      if (s > 0.25) {
        points.push({ x, y, z });
      }
      i++;
    }

    // Interaction & Animation state
    let rotY = 0;
    let velocity = 0.0035;
    const idleSpin = 0.0035;
    let isDragging = false;
    let lastX = 0;

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
      radius = Math.min(width, height) * 0.42; 
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

        return { rx, ry, rz: finalZ };
      });

      projected.sort((a, b) => a.rz - b.rz);

      for (let p of projected) {
        const depth = (p.rz + 1) / 2;
        const pf = 0.86 + depth * 0.28;
        
        const screenX = cx + p.rx * radius * pf;
        const screenY = cy + p.ry * radius * pf;
        const dotR = (0.55 + depth * 1.0) * (width > 500 ? 1.6 : 1.3); // Slightly larger dots

        ctx.beginPath();
        ctx.arc(screenX, screenY, dotR, 0, Math.PI * 2);
        
        // Depth coloring
        if (p.rz > 0) {
          const alpha = 0.5 + depth * 0.5; // Solid orange for front
          ctx.fillStyle = `rgba(234, 134, 48, ${alpha})`; 
        } else {
          // Dark grey for back points so they create a shadow outline on the white background
          const alpha = 0.12 + depth * 0.2;
          ctx.fillStyle = `rgba(30, 35, 40, ${alpha})`; 
        }
        
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

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
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
    <div style={{ width: '100%', height: '100%', position: 'relative', minHeight: '400px' }}>
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
