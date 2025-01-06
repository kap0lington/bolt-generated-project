import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import ScriptGeneratorPage from './pages/ScriptGeneratorPage';
import AnalyticsPage from './pages/AnalyticsPage';
import TestMediaPage from './pages/TestMediaPage';
import BillingPage from './pages/BillingPage';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';
import SignInPage from './pages/SignInPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/script" element={<ScriptGeneratorPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/test-media" element={<TestMediaPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}
