import React from 'react';

interface NewProjectDialogProps {
  onClose: () => void;
}

export default function NewProjectDialog({ onClose }: NewProjectDialogProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-deep-purple-800 rounded-xl w-full max-w-md p-6 border border-deep-purple-600">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">New Project</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Project Name</label>
            <input
              type="text"
              className="w-full bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-3 py-2"
              placeholder="Enter project name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Template</label>
            <select className="w-full bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-3 py-2">
              <option>Blank Project</option>
              <option>Social Media Ad</option>
              <option>Product Demo</option>
            </select>
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
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
