// NOTE: These are general-purpose templates written for a digital payments / retail
// banking-services platform. Replace [bracketed] items with your real company details
// and have them reviewed by a legal professional before going live.

import { COMPANY } from '../companyConfig'
export { COMPANY }

export const privacy = {
  path: '/privacy',
  short: 'Privacy Policy',
  title: 'Privacy Policy',
  eyebrow: 'Beta Source Software Privacy Standards',
  intro:
    'This website is the property of Beta Source Software Pvt. Ltd., a company that considers privacy to be of paramount importance. Through this statement, we explain why we collect personal data and inform you about your options to manage your data.',
  sections: [
    {
      id: 'data-protection',
      title: 'Data Protection & Security',
      body: [
        'We’ll never sell your data to third parties.',
        'In a few cases, it happens that we pass on personal data to companies in countries outside the European Economic Area. In this case, we’ll always ensure optimal security of your personal data by requiring an adequacy decision from the European Commission or equivalent high-standard data protection safeguards.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies, or comparable techniques, that we use',
      body: [
        'Our websites use functional, analytical, and tracking cookies. We need functional cookies in order for the website to function properly and to complete your purchases. We place the other cookies to offer you tailored web pages. These cookies are placed by external parties.',
      ],
    },
    {
      id: 'rights',
      title: 'Your rights',
      body: [
        'You have the legal right to ask us to inspect, rectify, or erase all personal data that we’ve stored about you, as well as the right to limit the processing and to transfer your data in a machine-readable format.',
      ],
    },
    {
      id: 'complaints',
      title: 'Complaints',
      body: [
        'If you believe that we’re using your personal data incorrectly or that we don’t deal with your questions correctly, you can file a complaint to the relevant Data Protection Authority.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes and updates',
      body: [
        'From time to time, it may be necessary for us to change this policy. We advise you to visit this page regularly to check if there have been any changes.',
        'If you have any questions about our privacy policy, please send an email to sales@betasourcesoftware.com or write to our registered office.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact details',
      body: [
        'Beta Source Software Pvt Ltd',
        'Head office – Rajasthan, India',
        'Email: sales@betasourcesoftware.com',
      ],
    },
  ],
}

export const refund = {
  path: '/refund',
  short: 'Refund Policy',
  title: 'Refund & Cancellation Policy',
  eyebrow: 'All Software / APIs Services Refund Policies',
  intro:
    'Cancellation and Refund policies for all software and API services provided by Beta Source Software Pvt. Ltd. Please read the terms below carefully.',
  sections: [
    {
      id: 'recharge-sales',
      title: 'Recharge Sales & Service Policy',
      body: [
        'All sales of Recharge are final and there will be no refund or exchange permitted. Please be advised that you are responsible for the mobile number or DTH account number you purchase Recharge for and all charges that result from those purchases. Beta Source Software Pvt. Ltd. is not responsible for any purchase of Recharge for an incorrect mobile number or DTH account number.',
      ],
    },
    {
      id: 'failed-transactions',
      title: 'Failed Delivery & Full Refund Process',
      body: [
        'However, in a case where a transaction has been completed by you on the Site, and money has been charged to your card or bank account but a Recharge has not delivered within 24 hours of your completion of the transaction then you may inform us by sending us an email at sales@betasourcesoftware.com or posting us a message on the Contact Us page. In such a scenario you will be entitled to a full refund.',
        'We request you to include in the email the following details: the mobile number or DTH account number, operator name, Recharge value, Transaction date, and Order Number.',
        'Beta Source Software Pvt. Ltd. shall investigate the incident and if it is found that money was indeed charged to your card or bank account without delivery of the Recharge then you will be refunded the money within 7 to 10 working days from the date of the receipt of your email.',
      ],
    },
    {
      id: 'wallet-recharge-complaints',
      title: 'Wallet Balance Transactions & Support Tickets',
      body: [
        'For cases if you are doing recharge from your Beta Source Software Pvt. Ltd. balance and you have received a success confirmation but not received a recharge or any other case, you are welcome to log a complaint by opening a support ticket on our Contact Us page and we will provide you a quick resolution.',
      ],
    },
    {
      id: 'b2b-b2c-balance',
      title: 'Refund Policy for B2B / B2C Customers',
      body: [
        'B2B/B2C customer takes the balance. In any event, the balance will not return.',
      ],
    },
    {
      id: 'liability-limitation',
      title: 'Limitation of Liability',
      body: [
        'Kindly note, in all cases our liability is only restricted to providing you a valid recharge or refund to the extent of payment received by us. We shall not be responsible for any other claim or consequential liability arising out of a failed recharge on our system.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact details',
      body: [
        'Beta Source Software Pvt Ltd',
        'Head office – Rajasthan, India',
        'Email: sales@betasourcesoftware.com',
      ],
    },
  ],
}

export const terms = {
  path: '/terms',
  short: 'Terms & Conditions',
  title: 'Terms & Conditions',
  eyebrow: 'Beta Source Software Legal Agreement',
  intro:
    'These Terms & Conditions take care of contractual conditions for all transactions between consumers and Beta Source Software Pvt. Ltd. All offers and deliveries are subject to the below sales and delivery conditions.',
  sections: [
    {
      id: 'reservation-of-rights',
      title: 'Reservation of Rights',
      body: [
        'The Site and Content provided on or through the Site are the intellectual property and copyrighted works of Beta Source Software Pvt. Ltd. or a third party provider. All Content is provided on an "As Is" and "As Available" basis and Beta Source Software Pvt. Ltd. reserves the right to take legal action if the content and site is misused by the user.',
        'You agree not to use the Site or Content provided on or through the Site for any purpose that is unlawful or prohibited by these Terms of Use, or the rules, guidelines or terms of use posted for a specific area of the Site or Content provided on or through the Site.',
      ],
    },
    {
      id: 'license',
      title: 'License',
      body: [
        'Subject to the terms and conditions set forth in these Terms of Use, Beta Source Software grants you a non-exclusive, non-transferable, limited right to access, use and display this site and the materials thereon. You agree not to interrupt or attempt to interrupt the operation of the site in any way.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      body: [
        'IN NO EVENT SHALL BETA SOURCE SOFTWARE PVT. LTD. BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA OR USE, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT OR TORT, ARISING FROM YOUR ACCESS TO, OR USE OF, THE SITE OR ANY CONTENT PROVIDED ON OR THROUGH THE SITE.',
      ],
    },
    {
      id: 'contractual-conditions',
      title: 'Contractual Conditions & General Framework',
      body: [
        'These Terms & Conditions can be downloaded or requested digitally via Beta Source Software. Click the contact link on the website to request the Terms & Conditions.',
        'These Terms & Conditions take care of contractual conditions for all transactions between consumers and Beta Source Software. All offers and deliveries are only subject to the below sales and delivery conditions. If any stipulation of these Terms & Conditions does not apply in the opinion of a judge, for whatever reason, the stipulation in question needs to be replaced by a stipulation based on which parties can still reach their objectives. The remaining stipulations of these general sales and delivery conditions remain in force.',
        'Deviating conditions on the part of the consumer or other agreements that have been concluded are not valid.',
        'By placing your order, you agree to have read these Terms & Conditions and our Privacy Statement and you explicitly agree to the contents thereof without further explanation. Beta Source Software has a right to change its delivery and/or payment terms after termination of the term. Payment orders are at the cost and risk of the one giving the payment order (or authorization). If you are under 18 years old, you need to ask permission from your parents before using Beta Source Software.',
      ],
    },
    {
      id: 'article-1',
      title: 'Article 1. Applicability of these conditions',
      body: [
        'These conditions apply to any offer and any agreement between Beta Source Software and consumers.',
        'The present conditions also apply to agreements with Beta Source Software in case third parties need to be involved for the execution.',
      ],
    },
    {
      id: 'article-2',
      title: 'Article 2. Offers',
      body: [
        'Price offers and other conditions are assumed to have been accepted by consumers. We try to indicate offered products and prices in a correct way. Typing errors or indicated prices are not binding, however.',
      ],
    },
    {
      id: 'article-3',
      title: 'Article 3. Delivery time',
      body: [
        'Delivery times indicated by Beta Source Software are approximates and do not involve final terms, but will never exceed actual delivery times by more than 90 days, save force majeure.',
        'In case of failed delivery in time, consumers need to give Beta Source Software notice of default via the contact form on www.betasourcesoftware.com and allow Beta Source Software a reasonable term to meet its obligations after all.',
        'Delivery times may vary depending on the type of payment method selected. Delivery times are indicated at the payment method. Beta Source Software will never deliver purchased products/services until full payment has been received on the Beta Source Software account or payment by credit card is confirmed/any online method.',
      ],
    },
    {
      id: 'article-4',
      title: 'Article 4. Information, data and intellectual property rights',
      body: [
        'General indications and descriptions of items to be delivered by Beta Source Software, as included in brochures, website, lists and similar items, are only meant as general information instead of quality and/or guarantee indications.',
        'Beta Source Software can assume correctness and completeness of information and data provided to Beta Source Software by consumers.',
        'Save as otherwise expressly agreed, where appropriate, intellectual property rights to brands, models, drawings, designs, and similar items belong to Beta Source Software.',
      ],
    },
    {
      id: 'article-5',
      title: 'Article 5. Guarantee',
      body: [
        'Beta Source Software guarantees that provided software/APIs services have not been used at the moment of provision to consumers. After delivery, consumers are responsible for provided software/APIs services.',
      ],
    },
    {
      id: 'article-6',
      title: 'Article 6. Payment',
      body: [
        'Unless agreed otherwise, net payment should be done beforehand. It is not possible to pay on account afterwards.',
        'Without further notice of default by Beta Source Software, consumers are assumed to be in default if the amount due has not been paid within the set payment term. Without prejudice to any other Beta Source Software right, the failure to make payment has at least the following consequences:',
        {
          list: [
            'Consumers are not entitled to settle any counterclaim to Beta Source Software with payment obligations under this agreement.',
            'In case of bankruptcy or suspension of payment by consumers, Beta Source Software claims and consumer obligations regarding Beta Source Software are immediately payable.',
          ],
        },
      ],
    },
    {
      id: 'article-7',
      title: 'Article 7. Liability',
      body: [
        'Liability of Beta Source Software is limited to redelivering the goods/services concerned or refunding the purchase price. If decided otherwise, liability will never exceed 1000 INR per case.',
        'In case of defects to delivered goods/services, liability as mentioned in article 11 of these conditions applies.',
        'Beta Source Software is not liable for indirect or direct damage, including missed profits, mental damage, emotional damage or any other type of damage resulting from Beta Source Software services.',
        'In case limited liability is below the level required by law, maximum liability will be limited to the minimum amount allowed by law.',
      ],
    },
    {
      id: 'article-8',
      title: 'Article 8. Force majeure',
      body: [
        'Beta Source Software has a right to repudiate the agreement entirely or partly or suspend delivery terms, as it chooses, without any obligation to pay damages, in the following cases: Force majeure of any kind whatsoever, mobilization, war, uproar, fire, strikes, transport difficulties, seizure, production interruptions, lack of raw materials and/or energy, disasters, restricting government measures of any kind whatsoever, insufficient performance of company installations that are necessary to observe the agreement, third party supply and service delivery failure, as well as any other circumstance independent of the intention of Beta Source Software that would have moved Beta Source Software to abstain from entering into the agreement or to enter into the agreement on different terms if it had been aware thereof.',
        'Beta Source Software also has a right to claim force majeure if circumstances that prevent (further) performance appear after Beta Source Software should have lived up to its commitment.',
        'During force majeure, the delivery obligations and other obligations of Beta Source Software are suspended. If the period in which performance of Beta Source Software obligations is not possible due to force majeure takes longer than weeks, both parties are authorized to repudiate the agreement without any obligation to pay damages.',
      ],
    },
    {
      id: 'article-9',
      title: 'Article 9. Disputes',
      body: [
        'These conditions are subject to law, excluding the Vienna Sales Convention. All disputes, interim proceedings included therein that are related to and/or result from these Terms & Conditions, will be dealt with by the competent court having jurisdiction in Rajasthan, India, with the proviso that Beta Source Software also has the right to have disputes settled by the competent court according to the domicile of the consumer.',
      ],
    },
    {
      id: 'article-10',
      title: 'Article 10. Privacy',
      body: [
        'Beta Source Software will treat all data and information provided by consumers carefully and confidentially. Beta Source Software only uses consumer personal data in accordance with its Privacy Policy and applicable data protection regulations.',
      ],
    },
    {
      id: 'article-11',
      title: 'Article 11. Change and location of conditions',
      body: [
        'These conditions are accessible on www.betasourcesoftware.com. The version valid at the time of the conclusion of the agreement applies, save where amendments are mandated by law or regulatory authorities.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact details',
      body: [
        'Beta Source Software Pvt Ltd',
        'Head office – Rajasthan, India',
        'Email: sales@betasourcesoftware.com',
      ],
    },
  ],
}

export const legalDocs = { privacy, refund, terms }
