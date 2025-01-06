import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturesCTA() {
  return (
    <section className="bg-deep-purple-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-6">
          Ready to Transform Your Content?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Start creating professional videos in minutes with AI Motion
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-neon-purple text-white px-8 py-4 rounded-lg font-space font-medium transition-all"
        >
          <Play className="h-5 w-5" />
          Get Started for Free
        </Link>
      </div>
    </section>
  );
}
