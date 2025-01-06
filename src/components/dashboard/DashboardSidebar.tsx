import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Video, Settings, FileText, BarChart2, User } from 'lucide-react';

export default function DashboardSidebar() {
  return (
    <aside className="fixed top-0 left-0 bottom-0 w-64 bg-deep-purple-800 border-r border-deep-purple-600">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">AI Motion</h2>
      </div>
      <nav className="mt-4">
        <Link
          to="/dashboard"
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-deep-purple-700 hover:text-white"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/editor"
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-deep-purple-700 hover:text-white"
        >
          <Video className="h-5 w-5" />
          <span>Editor</span>
        </Link>
        <Link
          to="/analytics"
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-deep-purple-700 hover:text-white"
        >
          <BarChart2 className="h-5 w-5" />
          <span>Analytics</span>
        </Link>
        <Link
          to="/script"
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-deep-purple-700 hover:text-white"
        >
          <FileText className="h-5 w-5" />
          <span>Scripts</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-deep-purple-700 hover:text-white"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-deep-purple-700 hover:text-white"
        >
          <User className="h-5 w-5" />
          <span>Profile</span>
        </Link>
      </nav>
    </aside>
  );
}
