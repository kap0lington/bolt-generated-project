import React from 'react';

export default function TaskBreakdown() {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Task Breakdown</h2>
      <div className="space-y-3">
        {['Scripting', 'Editing', 'Rendering', 'Review'].map((task, index) => (
          <div key={task} className="flex items-center justify-between">
            <span className="text-gray-300">{task}</span>
            <div className="w-48 h-2 bg-deep-purple-700 rounded-full">
              <div
                className="h-full bg-accent-purple rounded-full"
                style={{ width: `${(index + 1) * 25}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
