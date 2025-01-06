import React from 'react';
import { useBilling } from '../../hooks/useBilling';
import CreditUsageChart from './charts/CreditUsageChart';

export default function CreditUsage() {
  const { credits, loading } = useBilling();

  if (loading) {
    return (
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600 animate-pulse">
        <div className="h-6 w-48 bg-deep-purple-700 rounded mb-6" />
        <div className="h-64 bg-deep-purple-700 rounded" />
      </div>
    );
  }

  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <h3 className="text-xl font-bold text-white mb-6">Credit Usage</h3>
      <div className="h-64">
        <CreditUsageChart 
          used={credits?.creditsUsed || 0}
          remaining={credits?.creditsRemaining || 0}
        />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">Monthly Limit</p>
          <p className="text-2xl font-bold text-white">
            {credits?.monthlyLimit.toLocaleString() || 0}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Credits Used</p>
          <p className="text-2xl font-bold text-white">
            {credits?.creditsUsed.toLocaleString() || 0}
          </p>
        </div>
      </div>
    </div>
  );
}
