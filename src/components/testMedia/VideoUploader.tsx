import React, { useState } from 'react';

interface VideoUploaderProps {
  onUploadComplete: (result: any) => void;
}

export default function VideoUploader({ onUploadComplete }: VideoUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    try {
      // TODO: Implement actual upload logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = {
        publicId: 'sample-public-id',
        url: 'https://res.cloudinary.com/demo/video/upload/sample.mp4'
      };
      onUploadComplete(result);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-deep-purple-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Upload Video</h2>
      <div className="border-2 border-dashed border-deep-purple-600 rounded-lg p-8 text-center">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
          disabled={isUploading}
          className="hidden"
          id="video-upload"
        />
        <label
          htmlFor="video-upload"
          className="cursor-pointer"
        >
          <div className="text-gray-300 mb-2">
            Drag & drop or <span className="text-accent-purple">browse</span> to upload
          </div>
          <div className="text-sm text-gray-400">
            Supported formats: MP4, MOV, AVI
          </div>
          {isUploading && (
            <div className="mt-4 text-gray-300">Uploading...</div>
          )}
        </label>
      </div>
    </div>
  );
}
