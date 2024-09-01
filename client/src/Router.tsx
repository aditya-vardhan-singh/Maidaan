import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventPage from './pages/EventPage'; // reviewed
import { HomePage } from './pages/Home.page'; // reviewed
import HostingPage from './pages/HostingPage'; // reviewed
import ProfilePage from './pages/ProfilePage'; // reviewed
import SignUpPage from './pages/SignUpPage'; //
import { TournamentDetailPage } from './pages/TournamentDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/SignUp',
    element: <SignUpPage />,
  },
  {
    path: '/Tournament/Details',
    element: <TournamentDetailPage />,
  },
  {
    path: '/HostingPage',
    element: <HostingPage />,
  },
  {
    path: '/EventPage',
    element: <EventPage />,
  },
  {
    path: '/ProfilePage',
    element: <ProfilePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
