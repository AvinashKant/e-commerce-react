import { createBrowserRouter } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import AuthLayout from './layouts/AuthLayout';

import { publicRoutes } from './routes/public';
import { protectedRoutes } from './routes/protected';

const allRoutes = [...publicRoutes, ...protectedRoutes];

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: allRoutes,
  },
]);

export default router;
