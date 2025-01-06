import React from 'react';
import { Play, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const howItWorks = document.getElementById('how-it-works');
    if (howItWorks) {
      howItWorks.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-deep-purple-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-space font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              Transform Ideas into
              <span className="bg-gradient-to-r from-accent-purple to-neon-purple text-transparent bg-clip-text"> Stunning Videos</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-space">
              Create professional-quality videos in minutes with our AI-powered platform. No experience needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="flex items-center justify-center gap-2 bg-accent-purple hover:bg-neon-purple text-white px-8 py-4 rounded-lg font-space font-medium transition-all"
              >
                <Play className="h-5 w-5" />
                Try Now for Free
              </Link>
              <button 
                onClick={scrollToHowItWorks}
                className="flex items-center justify-center gap-2 bg-deep-purple-700 hover:bg-deep-purple-600 text-white px-8 py-4 rounded-lg font-space font-medium transition-all"
              >
                <Wand2 className="h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
