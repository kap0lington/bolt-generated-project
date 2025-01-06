import React, { useState } from 'react';
import { PlusCircle, Upload, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UploadMediaModal from './media/UploadMediaModal';
import NewProjectDialog from '../editor/NewProjectDialog';

const actions = [
  { icon: PlusCircle, label: 'New Video', primary: true, modal: 'new-project' },
  { icon: Upload, label: 'Upload Media', modal: 'upload' },
  { icon: Wand2, label: 'Build my script', path: '/script' },
];

export default function QuickActions() {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  const handleAction = (action: typeof actions[0]) => {
    if (action.path) {
      navigate(action.path);
    } else if (action.modal === 'upload') {
      setShowUploadModal(true);
    } else if (action.modal === 'new-project') {
      setShowNewProjectModal(true);
    }
  };

  return (
    <>
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={() => handleAction(action)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                action.primary
                  ? 'bg-accent-purple hover:bg-neon-purple text-white'
                  : 'bg-deep-purple-700 hover:bg-deep-purple-600 text-gray-300 hover:text-white'
              }`}
            >
              <action.icon className="h-5 w-5" />
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {showUploadModal && (
        <UploadMediaModal onClose={() => setShowUploadModal(false)} />
      )}

      {showNewProjectModal && (
        <NewProjectDialog onClose={() => setShowNewProjectModal(false)} />
      )}
    </>
  );
}
