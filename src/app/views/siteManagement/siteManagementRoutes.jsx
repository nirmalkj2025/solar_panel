import { lazy } from "react";
import Loadable from "app/components/Loadable";
import Clients from "./clients/Clients";
import Locations from "./locations/Locations";
const siteManagementRoutes = [
  { path: "/site-management/clients", element: <Clients /> },
  { path: "/site-management/locations", element: <Locations /> },
];

export default siteManagementRoutes;
