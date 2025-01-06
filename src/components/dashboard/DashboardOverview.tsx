import React from 'react';
import { Video, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import AICreditsDisplay from './AICreditsDisplay';
import BillingPlanDisplay from './BillingPlanDisplay';

const stats = [
  { icon: Video, label: 'Total Videos', value: '24' },
  { icon: Clock, label: 'Time Saved', value: '48h' },
];

export default function DashboardOverview() {
  const { user } = useAuth();
  const username = user?.user_metadata?.username || 'there';

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Welcome back, {username}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-purple/20 rounded-lg">
                <stat.icon className="h-6 w-6 text-accent-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
        <AICreditsDisplay />
        <BillingPlanDisplay />
      </div>
    </div>
  );
}
