import React from 'react';

export default function AnalyticsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <h3 className="text-gray-300 text-sm mb-2">Total Videos Created</h3>
        <p className="text-2xl font-bold text-white">142</p>
      </div>
      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <h3 className="text-gray-300 text-sm mb-2">Hours Saved</h3>
        <p className="text-2xl font-bold text-white">284</p>
      </div>
      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <h3 className="text-gray-300 text-sm mb-2">Engagement Rate</h3>
        <p className="text-2xl font-bold text-white">+32%</p>
      </div>
    </div>
  );
}
