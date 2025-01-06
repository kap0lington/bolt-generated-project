import React from 'react';

export default function MediaPanel() {
  return (
    <div className="p-4 border-b border-deep-purple-600">
      <h2 className="text-lg font-bold text-white mb-4">Media</h2>
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-deep-purple-700 aspect-square rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}
