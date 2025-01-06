import React from 'react';
import { useMediaLibrary } from '../../hooks/useMediaLibrary';
import MediaGrid from './media/MediaGrid';
import MediaStats from './media/MediaStats';

export default function MediaSection() {
  const { items, loading, error } = useMediaLibrary();

  if (error) {
    return (
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
        <p className="text-red-400">Failed to load media: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Media Library</h2>
        <button className="text-sm text-accent-purple hover:text-neon-purple">
          View All
        </button>
      </div>

      <MediaStats items={items} loading={loading} />
      <MediaGrid items={items} loading={loading} />
    </div>
  );
}
