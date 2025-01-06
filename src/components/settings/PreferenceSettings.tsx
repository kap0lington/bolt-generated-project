import React from 'react';

export default function PreferenceSettings() {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-6">Preferences</h2>
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox bg-deep-purple-700 border-deep-purple-600 text-accent-purple rounded"
            />
            <span className="text-gray-300">Dark Mode</span>
          </label>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Language</label>
          <select className="w-full bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-3 py-2">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );
}
