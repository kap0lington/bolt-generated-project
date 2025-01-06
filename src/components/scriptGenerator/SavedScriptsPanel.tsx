import React from 'react';

export default function SavedScriptsPanel() {
  return (
    <div className="w-96 bg-deep-purple-800 border-l border-deep-purple-600 p-6">
      <h2 className="text-xl font-bold text-white mb-4">Saved Scripts</h2>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-deep-purple-700 p-4 rounded-lg">
            <h3 className="text-white font-medium">Script {i}</h3>
            <p className="text-gray-300 text-sm">Last edited 2 days ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}
