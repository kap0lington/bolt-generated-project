import React from 'react';

interface VideoEditorProps {
  publicId: string;
}

export default function VideoEditor({ publicId }: VideoEditorProps) {
  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Video Editor</h2>
      <div className="aspect-video bg-deep-purple-700 rounded-lg flex items-center justify-center">
        <video
          src={`https://res.cloudinary.com/demo/video/upload/${publicId}.mp4`}
          controls
          className="max-w-full max-h-full"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <button className="bg-accent-purple hover:bg-neon-purple text-white px-4 py-2 rounded-lg">
          Trim
        </button>
        <button className="bg-deep-purple-700 hover:bg-deep-purple-600 text-white px-4 py-2 rounded-lg">
          Add Effects
        </button>
      </div>
    </div>
  );
}
