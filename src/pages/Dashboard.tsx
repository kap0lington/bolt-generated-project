import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import ProjectsList from '../components/dashboard/ProjectsList';
import QuickActions from '../components/dashboard/QuickActions';
import Analytics from '../components/dashboard/Analytics';
import MediaSection from '../components/dashboard/MediaSection';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProjectsList />
        </div>
        <div>
          <QuickActions />
          <Analytics />
        </div>
      </div>
      <MediaSection />
    </DashboardLayout>
  );
}
