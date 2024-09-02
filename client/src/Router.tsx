import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventPage from "./pages/EventPage"; // reviewed
import { HomePage } from "./pages/Home.page"; // reviewed
import HostingPage from "./pages/HostingPage"; // reviewed
import ProfilePage from "./pages/ProfilePage"; // reviewed
import SignUpPage from "./pages/SignUpPage"; //
import Tournaments from "./components/Tournaments/Tournaments";
import Academies from "./pages/Academies";
import GovtSchemes from "./pages/GovtSchemes";
import { TournamentDetailPage } from "./pages/TournamentDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/tournaments",
    element: <Tournaments />,
  },
  {
    path: "/tournaments/details",
    element: <TournamentDetailPage />,
  },
  {
    path: "/academies",
    element: <Academies />,
  },
  {
    path: "/government-schemes",
    element: <GovtSchemes />,
  },
  {
    path: "/hosting",
    element: <HostingPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/profile-page",
    element: <ProfilePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
