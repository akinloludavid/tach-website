import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import WithSuspense from "../components/WithSuspense";
import { AppRoutes } from "../utils/types";
import { PUBLIC_PATHS } from "./constants";
import { WavyLink } from "react-wavy-transitions";
const { HOME, ABOUT, CONTACT, EVENTS, GIVING, MINISTRIES, CHURCH_ADMIN } =
  PUBLIC_PATHS;

const HomePage = WithSuspense(lazy(() => import("../pages/Homepage")));
const AboutPage = WithSuspense(lazy(() => import("../pages/About")));
const ContactUs = WithSuspense(lazy(() => import("../pages/Contact")));
const EventsPage = WithSuspense(lazy(() => import("../pages/Events")));
const GivingPage = WithSuspense(lazy(() => import("../pages/Giving")));
const MinistriesPage = WithSuspense(lazy(() => import("../pages/Ministries")));
const ChurchAdminPage = WithSuspense(
  lazy(() => import("../pages/ChurchAdmin"))
);

export const PublicRoutes: AppRoutes[] = [
  {
    element: <HomePage />,
    path: HOME,
  },
  {
    element: <AboutPage />,
    path: ABOUT,
  },
  {
    element: <ContactUs />,
    path: CONTACT,
  },
  {
    element: <EventsPage />,
    path: EVENTS,
  },
  {
    element: <MinistriesPage />,
    path: MINISTRIES,
  },
  {
    element: <GivingPage />,
    path: GIVING,
  },
  {
    element: <ChurchAdminPage />,
    path: CHURCH_ADMIN,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
