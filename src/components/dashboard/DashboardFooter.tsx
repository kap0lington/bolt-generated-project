import React from 'react';
import { Home } from 'lucide-react';

export default function DashboardFooter() {
  return (
    <footer className="fixed bottom-0 right-0 left-64 h-12 bg-deep-purple-800/80 backdrop-blur-lg border-t border-deep-purple-600 z-10">
      <div className="h-full px-8 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </a>
        <p className="text-sm text-gray-400">
          © 2024 Ai Motion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
