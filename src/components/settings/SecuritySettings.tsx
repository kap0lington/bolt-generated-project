import React from 'react';

export default function SecuritySettings() {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-6">Security</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Two-Factor Authentication</label>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Disabled</span>
            <button className="bg-deep-purple-700 hover:bg-deep-purple-600 text-white px-4 py-2 rounded-lg">
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
