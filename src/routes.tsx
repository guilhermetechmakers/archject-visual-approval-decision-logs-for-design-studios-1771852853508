import { createBrowserRouter, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { ForgotPasswordPage } from '@/pages/forgot-password'
import { NotFoundPage } from '@/pages/not-found'
import { HelpPage } from '@/pages/help'
import { PrivacyPage } from '@/pages/privacy'
import { TermsPage } from '@/pages/terms'
import { ClientPortalPage } from '@/pages/client-portal'
import { DashboardOverview } from '@/pages/dashboard/overview'
import { ProjectsPage } from '@/pages/dashboard/projects'
import { ProjectWorkspacePage } from '@/pages/dashboard/project-workspace'
import { DecisionsPage } from '@/pages/dashboard/decisions'
import { TemplatesPage } from '@/pages/dashboard/templates'
import { ExportsPage } from '@/pages/dashboard/exports'
import { NotificationsPage } from '@/pages/dashboard/notifications'
import { AnalyticsPage } from '@/pages/dashboard/analytics'
import { SettingsPage } from '@/pages/dashboard/settings'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/help', element: <HelpPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/approve/:token', element: <ClientPortalPage /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/new', element: <ProjectsPage /> },
      { path: 'projects/:projectId', element: <ProjectWorkspacePage /> },
      { path: 'decisions', element: <DecisionsPage /> },
      { path: 'decisions/new', element: <DecisionsPage /> },
      { path: 'decisions/:decisionId', element: <DecisionsPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'exports', element: <ExportsPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  { path: '/404', element: <NotFoundPage /> },
  { path: '*', element: <Navigate to="/404" replace /> },
])
