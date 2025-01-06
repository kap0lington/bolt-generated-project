import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ScriptGenerator from '../components/scriptGenerator/ScriptGenerator';
import SavedScriptsPanel from '../components/scriptGenerator/SavedScriptsPanel';

export default function ScriptGeneratorPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 flex">
        <div className="flex-1 px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Build Your Video Script</h1>
          <div className="max-w-4xl">
            <ScriptGenerator />
          </div>
        </div>
        <SavedScriptsPanel />
      </div>
    </DashboardLayout>
  );
}
