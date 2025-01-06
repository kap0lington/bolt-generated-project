import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import BillingOverview from '../components/billing/BillingOverview';
import CreditUsage from '../components/billing/CreditUsage';
import TransactionHistory from '../components/billing/TransactionHistory';
import SubscriptionDetails from '../components/billing/SubscriptionDetails';

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white">Billing & Credits</h1>
        <BillingOverview />
        <div className="grid lg:grid-cols-2 gap-8">
          <CreditUsage />
          <SubscriptionDetails />
        </div>
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
}
