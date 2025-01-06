import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-deep-purple-900/80 backdrop-blur-lg border-b border-deep-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="AI Motion Logo" className="h-10 w-10" />
                <span className="font-space font-bold text-xl text-white">AI Motion</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white font-space">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white font-space">Pricing</a>
              <Link 
                to="/signup" 
                className="bg-accent-purple hover:bg-neon-purple text-white px-6 py-2 rounded-lg font-space transition-all"
              >
                Try Now
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
