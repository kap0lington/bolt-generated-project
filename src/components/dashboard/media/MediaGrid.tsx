import React, { useState } from 'react';
import { Play, ZoomIn } from 'lucide-react';

interface MediaGridProps {
  items: any[];
  loading: boolean;
}

export default function MediaGrid({ items, loading }: MediaGridProps) {
  const [previewItem, setPreviewItem] = useState<any | null>(null);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-deep-purple-700 aspect-square rounded-lg animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group aspect-square rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setPreviewItem(item)}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.url}
                className="w-full h-full object-cover"
                muted
              />
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-2">
              <div className="text-white text-sm">
                {item.size / 1024} KB
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                {item.type === 'image' ? (
                  <ZoomIn className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {previewItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setPreviewItem(null)}
        >
          <div className="relative max-w-full max-h-full">
            {previewItem.type === 'image' ? (
              <img
                src={previewItem.url}
                alt=""
                className="max-w-full max-h-[90vh] object-contain"
              />
            ) : (
              <video
                src={previewItem.url}
                className="max-w-full max-h-[90vh]"
                controls
                autoPlay
              />
            )}
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setPreviewItem(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
