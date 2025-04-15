import { lazy } from "react";
import Loadable from "app/components/Loadable";

// const EnergyAnalytics = Loadable(lazy(() => import("./energy-analytrics/EnergyAnalytics")));
const EnergyAnalytics = Loadable(lazy(() => import("./energy-analytics/EnergyAnalytics")));
// const AlarmsFaults = Loadable(lazy(() => import("./alarms-fauilts/AlarmsFuilts")));
// const AlarmsFuilts = Loadable(lazy(() => import("./alarms-faults/AlarmsFuilts")));
// const AlarmsFaults = Loadable(lazy(() => import("./alarms-faults/AlarmsFuilts")));
// const Devices = Loadable(lazy(() => import("./devices/Devices")));
const analyticsRoutes = [
  { path: "/analytics/energy-analytics", element: <EnergyAnalytics /> }
  // { path: "/analytics/alarms-fauilts", element: <AlarmsFaults /> }
  //   { path: "/plant-monitoring/devices", element: <Devices /> }
];

export default analyticsRoutes;
