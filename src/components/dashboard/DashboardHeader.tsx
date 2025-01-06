import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-deep-purple-800 border-b border-deep-purple-600">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg focus:ring-accent-purple focus:border-accent-purple"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white">
            <Bell className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-deep-purple-700 rounded-full"></div>
            <div>
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-gray-300">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
