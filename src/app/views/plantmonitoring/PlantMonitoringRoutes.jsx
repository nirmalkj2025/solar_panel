import { lazy } from "react";
import Loadable from "app/components/Loadable";

const Plants = Loadable(lazy(() => import("./plants/Plants")));
const PlantsTypeMaster = Loadable(lazy(() => import("./plants/PlantsTypeMaster")));
// const Inverters = Loadable(lazy(() => import("./inverters/Inverters")));
// const Meters = Loadable(lazy(() => import("./meters/Meters")));
const SMBS = Loadable(lazy(() => import("./smbs/SMBs")));
const WeatherStation = Loadable(lazy(() => import("./weather/WeatherStation")));
const BatteryStorage = Loadable(lazy(() => import("./battery-storage/BatteryStorage")));
// const Devices = Loadable(lazy(() => import("./devices/Devices")));
const plantMonitoringRoutes = [
  { path: "/plant-monitoring/plants", element: <Plants /> },
  { path: "/plant-monitoring/plant-type-master", element: <PlantsTypeMaster /> },
  //   { path: "/plant-monitoring/inverters", element: <Inverters /> },
  //   { path: "/plant-monitoring/meters", element: <Meters /> },
  { path: "/plant-monitoring/smbs", element: <SMBS /> },
  { path: "/plant-monitoring/weather-station", element: <WeatherStation /> },
  { path: "/plant-monitoring/battery-storage", element: <BatteryStorage /> }
  //   { path: "/plant-monitoring/devices", element: <Devices /> }
];

export default plantMonitoringRoutes;
