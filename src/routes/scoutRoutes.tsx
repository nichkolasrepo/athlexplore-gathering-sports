
import React from 'react';
import { Route } from 'react-router-dom';
import RouteGuard from '@/components/auth/RouteGuard';
import Community from '@/pages/Community';
import ScoutDashboard from '@/pages/ScoutDashboard';
import ScoutingReports from '@/pages/ScoutingReports';
import ScoutNotes from '@/pages/ScoutNotes';
import ScoutSettings from '@/pages/ScoutSettings';

export const scoutRoutes = [
  <Route key="scout-community" path="/scout-community" element={
    <RouteGuard requiredRole="scout">
      <Community />
    </RouteGuard>
  } />,
  <Route key="scout-dashboard" path="/scout-dashboard" element={
    <RouteGuard requiredRole="scout">
      <ScoutDashboard />
    </RouteGuard>
  } />,
  <Route key="scout-notes" path="/scout-notes" element={
    <RouteGuard requiredRole="scout">
      <ScoutNotes />
    </RouteGuard>
  } />,
  <Route key="scout-reports" path="/scout-reports" element={
    <RouteGuard requiredRole="scout">
      <ScoutingReports />
    </RouteGuard>
  } />,
  <Route key="scout-settings" path="/scout-settings" element={
    <RouteGuard requiredRole="scout">
      <ScoutSettings />
    </RouteGuard>
  } />,
];
