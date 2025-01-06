import React from 'react';
import { Wand2, Video, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="h-8 w-8 text-accent-purple" />,
    title: 'AI-Powered Creation',
    description: 'Generate videos from text prompts using advanced AI algorithms'
  },
  {
    icon: <Video className="h-8 w-8 text-accent-purple" />,
    title: 'Professional Quality',
    description: 'Create studio-quality videos with customizable templates'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-accent-purple" />,
    title: 'Easy Customization',
    description: 'Edit and personalize your videos with intuitive tools'
  },
  {
    icon: <Zap className="h-8 w-8 text-accent-purple" />,
    title: 'Fast Rendering',
    description: 'Export your videos in minutes with our optimized engine'
  }
];

export default function FeatureHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
          Powerful Features
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Everything you need to create stunning videos with AI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-deep-purple-800 p-8 rounded-lg">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="font-space font-bold text-xl text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
