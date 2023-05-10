import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import RoomPage from './pages/RoomPage';
import CallsPage from './pages/CallsPage';
import CallsHistoryPage from './pages/CallHistory';
import ProjectPage from './pages/ProjectPage';
import RolePage from './pages/Role';
import AccessControlListPage from './pages/AccessControlList';

import { DataGridTable } from './components/data-grid/DataGridNew';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'dashboard', element: <DashboardAppPage /> },
        { path: 'employees', element: <UserPage /> },
        { path: 'rooms', element: <RoomPage /> },
        { path: 'project', element: <ProjectPage /> },
        { path: 'calls', element: <CallsPage /> },
        { path: 'call-history', element: <CallsHistoryPage /> },
        { path: 'role', element: <RolePage /> },
        { path: 'access-control-list', element: <AccessControlListPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
