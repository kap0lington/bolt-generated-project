import React from 'react';

export default function ValueMetrics() {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Value Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h3 className="text-gray-300 text-sm mb-2">ROI</h3>
          <p className="text-2xl font-bold text-white">4.2x</p>
        </div>
        <div className="p-4">
          <h3 className="text-gray-300 text-sm mb-2">Cost Savings</h3>
          <p className="text-2xl font-bold text-white">$12,450</p>
        </div>
        <div className="p-4">
          <h3 className="text-gray-300 text-sm mb-2">Team Productivity</h3>
          <p className="text-2xl font-bold text-white">+65%</p>
        </div>
      </div>
    </div>
  );
}
