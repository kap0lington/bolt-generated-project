import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import AnalyticsSummary from '../components/analytics/AnalyticsSummary';
import AnalyticsCharts from '../components/analytics/AnalyticsCharts';
import TaskBreakdown from '../components/analytics/TaskBreakdown';
import ValueMetrics from '../components/analytics/ValueMetrics';
import EnvironmentalImpact from '../components/analytics/EnvironmentalImpact';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white">Your Analytics Overview</h1>
        <AnalyticsSummary />
        <div className="grid lg:grid-cols-2 gap-8">
          <AnalyticsCharts />
          <TaskBreakdown />
        </div>
        <ValueMetrics />
        <EnvironmentalImpact />
      </div>
    </DashboardLayout>
  );
}
