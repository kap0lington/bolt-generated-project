import { useState, useEffect } from 'react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  size: number;
  uploadedAt: string;
}

export function useMediaLibrary() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        // TODO: Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setItems([
          {
            id: '1',
            type: 'image',
            url: 'https://picsum.photos/400/300',
            size: 1024,
            uploadedAt: '2024-03-15'
          },
          {
            id: '2',
            type: 'video',
            url: 'https://res.cloudinary.com/demo/video/upload/sample.mp4',
            size: 5120,
            uploadedAt: '2024-03-14'
          }
        ]);
      } catch (err) {
        setError('Failed to load media library');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  return { items, loading, error };
}
