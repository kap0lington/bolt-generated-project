import React from 'react';

export default function NotificationSettings() {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox bg-deep-purple-700 border-deep-purple-600 text-accent-purple rounded"
            />
            <span className="text-gray-300">Email Notifications</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox bg-deep-purple-700 border-deep-purple-600 text-accent-purple rounded"
            />
            <span className="text-gray-300">Push Notifications</span>
          </label>
        </div>
      </div>
    </div>
  );
}
