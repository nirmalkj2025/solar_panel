import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import sessionRoutes from "./views/sessions/session-routes";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import plantMonitoringRoutes from "app/views/plantmonitoring/PlantMonitoringRoutes";
import analyticsRoutes from "app/views/analytics/AnalyticsRoutes";
import administrationRoutes from "app/views/administration/AdministrationRoutes";
import deviceRoutes from "app/views/devices/DeviceRoutes";
import siteManagementRoutes from "./views/siteManagement/siteManagementRoutes";
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));
import SolarPlantDashboard from "./views/dashboard/SolarPlantDashboard";
const routes = [
  { path: "/", element: <Navigate to="dashboard/default" /> },
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...siteManagementRoutes,
      ...materialRoutes,
      ...plantMonitoringRoutes,
      ...deviceRoutes,
      ...analyticsRoutes,
      ...administrationRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      { path: "/dashboard/temp", element: <SolarPlantDashboard />, auth: authRoles.admin },
      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor }
    ]
  },

  // session pages route
  ...sessionRoutes
];

export default routes;
