import React, { useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import VideoUploader from '../components/testMedia/VideoUploader';
import VideoEditor from '../components/testMedia/VideoEditor';
import type { VideoUploadResult } from '../lib/cloudinary/videoService';

export default function TestMediaPage() {
  const [currentVideo, setCurrentVideo] = useState<VideoUploadResult | null>(null);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white">Test Media</h1>
        <VideoUploader onUploadComplete={setCurrentVideo} />
        {currentVideo && (
          <VideoEditor publicId={currentVideo.publicId} />
        )}
      </div>
    </DashboardLayout>
  );
}
