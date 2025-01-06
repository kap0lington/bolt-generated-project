import React from 'react';
import FeatureHighlights from '../components/features/FeatureHighlights';
import HowItWorks from '../components/features/HowItWorks';
import Testimonials from '../components/features/Testimonials';
import FeaturesCTA from '../components/features/FeaturesCTA';

export default function Features() {
  return (
    <div id="features" className="bg-deep-purple-900 scroll-mt-16">
      <FeatureHighlights />
      <HowItWorks />
      <Testimonials />
      <FeaturesCTA />
    </div>
  );
}
