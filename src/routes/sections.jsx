import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';

export const LgoinPage = lazy(() => import('src/pages/login'));
export const IndexPage = lazy(() => import('src/pages/app'));
export const MoviesPage = lazy(() => import('src/pages/movies'));
export const UsersPage = lazy(() => import('src/pages/users'));
export const BonusPage = lazy(() => import('src/pages/bonus'));
export const PaymentsPage = lazy(() => import('src/pages/payments'));
export const RefundsPage = lazy(() => import('src/pages/refunds'));
export const ReviewsPage = lazy(() => import('src/pages/reviews'));

export default function Router() {
  const routes = useRoutes([
    { 
      path: '/', element: <Navigate to="/login" />,
    },
    { 
      path: '/login', 
      element:  (
        <Suspense>
          <LgoinPage />
        </Suspense>
      ),
    },
    {
      element: (
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout> 
      ),
      children: [
        { path: 'movies', element: <MoviesPage /> },
        { path: 'users', element: <UsersPage /> },
        { path: 'bonus', element: <BonusPage /> },
        { path: 'payments', element: <PaymentsPage /> },
        { path: 'refunds', element: <RefundsPage /> },
        { path: 'reviews', element: <ReviewsPage /> },
      ],  
    },
  ]);

  return routes;
}
