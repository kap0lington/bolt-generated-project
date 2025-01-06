import React from 'react';

interface UploadMediaModalProps {
  onClose: () => void;
}

export default function UploadMediaModal({ onClose }: UploadMediaModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-deep-purple-800 rounded-xl w-full max-w-md p-6 border border-deep-purple-600">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Upload Media</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        <div className="border-2 border-dashed border-deep-purple-600 rounded-lg p-8 text-center">
          <div className="text-gray-300 mb-2">
            Drag & drop or <span className="text-accent-purple">browse</span> to upload
          </div>
          <div className="text-sm text-gray-400">
            Supported formats: MP4, MOV, AVI, PNG, JPG
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-deep-purple-700 hover:bg-deep-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button className="bg-accent-purple hover:bg-neon-purple text-white px-4 py-2 rounded-lg">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
