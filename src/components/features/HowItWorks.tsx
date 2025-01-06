import React from 'react';
import { Play, Wand2, Video, Upload } from 'lucide-react';

const steps = [
  {
    icon: <Play className="h-8 w-8 text-accent-purple" />,
    title: 'Start with a Prompt',
    description: 'Describe your video idea in plain English'
  },
  {
    icon: <Wand2 className="h-8 w-8 text-accent-purple" />,
    title: 'AI Generates Content',
    description: 'Our AI creates a script and storyboard'
  },
  {
    icon: <Video className="h-8 w-8 text-accent-purple" />,
    title: 'Customize Your Video',
    description: 'Edit and personalize your video'
  },
  {
    icon: <Upload className="h-8 w-8 text-accent-purple" />,
    title: 'Export & Share',
    description: 'Download or share your video'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-deep-purple-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Create professional videos in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-accent-purple/10 rounded-full w-20 h-20 mx-auto"></div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 bg-deep-purple-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-space font-bold text-xl text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
