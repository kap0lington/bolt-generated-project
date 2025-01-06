import React from 'react';

export default function AIPanel() {
  return (
    <div className="p-4 border-b border-deep-purple-600">
      <h2 className="text-lg font-bold text-white mb-4">AI Tools</h2>
      <div className="space-y-2">
        <button className="w-full bg-accent-purple hover:bg-neon-purple text-white px-4 py-2 rounded-lg">
          Generate Script
        </button>
        <button className="w-full bg-deep-purple-700 hover:bg-deep-purple-600 text-white px-4 py-2 rounded-lg">
          Auto-Edit
        </button>
      </div>
    </div>
  );
}
