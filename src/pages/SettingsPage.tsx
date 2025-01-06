import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import AccountSettings from '../components/settings/AccountSettings';
import SecuritySettings from '../components/settings/SecuritySettings';
import PreferenceSettings from '../components/settings/PreferenceSettings';
import NotificationSettings from '../components/settings/NotificationSettings';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AccountSettings />
            <SecuritySettings />
          </div>
          <div className="space-y-8">
            <PreferenceSettings />
            <NotificationSettings />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
