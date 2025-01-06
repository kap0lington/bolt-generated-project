import React from 'react';
import { Zap } from 'lucide-react';

export default function AICreditsDisplay() {
  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-accent-purple/20 rounded-lg">
          <Zap className="h-6 w-6 text-accent-purple" />
        </div>
        <div>
          <p className="text-sm text-gray-400">AI Credits</p>
          <p className="text-2xl font-bold text-white">1,200</p>
        </div>
      </div>
    </div>
  );
}
