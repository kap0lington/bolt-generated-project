import React from 'react';

interface MediaStatsProps {
  items: any[];
  loading: boolean;
}

export default function MediaStats({ items, loading }: MediaStatsProps) {
  const totalSize = items.reduce((sum, item) => sum + item.size, 0);
  const totalItems = items.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
        <h3 className="text-sm text-gray-400 mb-2">Total Media</h3>
        <p className="text-2xl font-bold text-white">
          {loading ? '...' : totalItems}
        </p>
      </div>
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
        <h3 className="text-sm text-gray-400 mb-2">Storage Used</h3>
        <p className="text-2xl font-bold text-white">
          {loading ? '...' : `${(totalSize / 1024).toFixed(1)} MB`}
        </p>
      </div>
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
        <h3 className="text-sm text-gray-400 mb-2">Last Upload</h3>
        <p className="text-2xl font-bold text-white">
          {loading ? '...' : items[0]?.uploadedAt || 'None'}
        </p>
      </div>
    </div>
  );
}
