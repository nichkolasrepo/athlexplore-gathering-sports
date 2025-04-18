
import React from 'react';
import { Route } from 'react-router-dom';
import RouteGuard from '@/components/auth/RouteGuard';
import AthleteDashboard from '@/pages/AthleteDashboard';
import AthleteSettings from '@/pages/AthleteSettings';
import Nutrition from '@/pages/Nutrition';
import Performance from '@/pages/Performance';
import PerformanceGoals from '@/pages/PerformanceGoals';
import Training from '@/pages/Training';
import TrainingLog from '@/pages/TrainingLog';

export const athleteRoutes = [
  <Route key="athlete-dashboard" path="/athlete-dashboard" element={
    <RouteGuard requiredRole="athlete">
      <AthleteDashboard />
    </RouteGuard>
  } />,
  <Route key="athlete-nutrition" path="/athlete-nutrition" element={
    <RouteGuard requiredRole="athlete">
      <Nutrition />
    </RouteGuard>
  } />,
  <Route key="athlete-performance" path="/athlete-performance" element={
    <RouteGuard requiredRole="athlete">
      <Performance />
    </RouteGuard>
  } />,
  <Route key="athlete-performance-goals" path="/athlete-performance-goals" element={
    <RouteGuard requiredRole="athlete">
      <PerformanceGoals />
    </RouteGuard>
  } />,
  <Route key="athlete-settings" path="/athlete-settings" element={
    <RouteGuard requiredRole="athlete">
      <AthleteSettings />
    </RouteGuard>
  } />,
  <Route key="athlete-training" path="/athlete-training" element={
    <RouteGuard requiredRole="athlete">
      <Training />
    </RouteGuard>
  } />,
  <Route key="athlete-training-log" path="/athlete-training-log" element={
    <RouteGuard requiredRole="athlete">
      <TrainingLog />
    </RouteGuard>
  } />,
];
