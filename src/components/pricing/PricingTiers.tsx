import React from 'react';
import { Check, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For individuals getting started with AI video creation',
    features: [
      '5 video exports per month',
      '720p resolution',
      'Basic templates',
      'Watermarked videos',
      'Community support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For professionals creating regular content',
    features: [
      '50 video exports per month',
      '1080p resolution',
      'Premium templates',
      'No watermark',
      'Priority support',
      'Custom branding'
    ],
    cta: 'Go Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and businesses with custom needs',
    features: [
      'Unlimited video exports',
      '4K resolution',
      'Custom templates',
      'Dedicated account manager',
      'Team collaboration',
      'API access'
    ],
    cta: 'Contact Us',
    popular: false
  }
];

export default function PricingTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-2xl bg-deep-purple-800 p-8 ${
            tier.popular ? 'ring-2 ring-accent-purple' : ''
          }`}
        >
          {tier.popular && (
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-accent-purple text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Zap className="h-4 w-4" />
              Most Popular
            </div>
          )}
          <h3 className="font-space font-bold text-2xl text-white mb-2">
            {tier.name}
          </h3>
          <p className="text-gray-300 mb-4">{tier.description}</p>
          <div className="text-white font-space font-bold text-4xl mb-6">
            {tier.price}
            {typeof tier.price === 'string' && tier.price !== 'Free' && (
              <span className="text-gray-300 text-xl">/month</span>
            )}
          </div>
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-300">
                <Check className="h-5 w-5 text-accent-purple" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full ${
              tier.popular
                ? 'bg-accent-purple hover:bg-neon-purple'
                : 'bg-deep-purple-700 hover:bg-deep-purple-600'
            } text-white px-6 py-3 rounded-lg font-space font-medium transition-colors`}
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
