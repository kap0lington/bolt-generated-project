import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useProfile } from '../../hooks/useProfile';
import { useToast } from '../../contexts/ToastContext';

export default function AccountSettings() {
  const { user } = useAuth();
  const { updateProfile, updateEmail, updatePassword } = useProfile();
  const { showError } = useToast();
  
  const [username, setUsername] = useState(user?.user_metadata?.username || '');
  const [newEmail, setNewEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const success = await updateProfile(username);
      if (success) {
        // Show success message
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmail === user?.email) return;
    
    setLoading(true);
    try {
      const success = await updateEmail(newEmail);
      if (success) {
        // Show success message
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      showError('Please fill in all password fields');
      return;
    }

    setLoading(true);
    try {
      const success = await updatePassword(currentPassword, newPassword);
      if (success) {
        setCurrentPassword('');
        setNewPassword('');
        // Show success message
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <h2 className="text-xl font-bold text-white mb-6">Account Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-deep-purple-700 flex items-center justify-center">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <button className="text-accent-purple hover:text-neon-purple transition-colors">
            Change Avatar
          </button>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-deep-purple-900 border border-deep-purple-600 rounded-lg p-3 text-white"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full bg-deep-purple-900 border border-deep-purple-600 rounded-lg p-3 text-white"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-accent-purple hover:bg-neon-purple text-white px-4 py-2 rounded-lg transition-colors disabled:bg-deep-purple-700"
          >
            Update Profile
          </button>
        </form>

        <div className="border-t border-deep-purple-600 pt-6">
          <h3 className="text-lg font-medium text-white mb-4">Change Password</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-deep-purple-900 border border-deep-purple-600 rounded-lg p-3 text-white pl-10"
                  disabled={loading}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-deep-purple-900 border border-deep-purple-600 rounded-lg p-3 text-white pl-10"
                  disabled={loading}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-accent-purple hover:bg-neon-purple text-white px-4 py-2 rounded-lg transition-colors disabled:bg-deep-purple-700"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
