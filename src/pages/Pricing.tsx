import React from 'react';
import PricingHeader from '../components/pricing/PricingHeader';
import PricingTiers from '../components/pricing/PricingTiers';
import PricingFAQ from '../components/pricing/PricingFAQ';

export default function Pricing() {
  return (
    <section id="pricing" className="min-h-screen bg-deep-purple-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <PricingHeader />
        <PricingTiers />
        <PricingFAQ />
      </div>
    </section>
  );
}
