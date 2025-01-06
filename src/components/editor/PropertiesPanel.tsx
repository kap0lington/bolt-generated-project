import React from 'react';

export default function PropertiesPanel() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-white mb-4">Properties</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Duration</label>
          <input
            type="text"
            className="w-full bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-3 py-2"
            value="00:30"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Resolution</label>
          <input
            type="text"
            className="w-full bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-3 py-2"
            value="1080p"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
