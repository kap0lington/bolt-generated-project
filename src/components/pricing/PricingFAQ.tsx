import React from 'react';

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, our Starter plan is completely free with no time limit.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely, you can cancel your subscription at any time.'
  }
];

export default function PricingFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-space font-bold text-2xl text-white text-center mb-8">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="bg-deep-purple-800 p-6 rounded-lg">
            <h4 className="font-space font-medium text-white mb-2">
              {faq.question}
            </h4>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
