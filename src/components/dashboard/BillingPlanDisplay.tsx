import React from 'react';
import { CreditCard } from 'lucide-react';

export default function BillingPlanDisplay() {
  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-accent-purple/20 rounded-lg">
          <CreditCard className="h-6 w-6 text-accent-purple" />
        </div>
        <div>
          <p className="text-sm text-gray-400">Billing Plan</p>
          <p className="text-2xl font-bold text-white">Pro</p>
        </div>
      </div>
    </div>
  );
}
