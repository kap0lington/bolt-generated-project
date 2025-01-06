import React from 'react';

export default function EnvironmentalImpact() {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Environmental Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h3 className="text-gray-300 text-sm mb-2">Energy Saved</h3>
          <p className="text-2xl font-bold text-white">1,420 kWh</p>
        </div>
        <div className="p-4">
          <h3 className="text-gray-300 text-sm mb-2">CO2 Reduced</h3>
          <p className="text-2xl font-bold text-white">0.8 t</p>
        </div>
        <div className="p-4">
          <h3 className="text-gray-300 text-sm mb-2">Equivalent Trees</h3>
          <p className="text-2xl font-bold text-white">12</p>
        </div>
      </div>
    </div>
  );
}
