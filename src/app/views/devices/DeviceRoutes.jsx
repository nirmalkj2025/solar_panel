import { lazy } from "react";
import Loadable from "app/components/Loadable";
// const DeviceList = Loadable(lazy(() => import("./device-list/DeviceList")));
// const DeviceList = Loadable(lazy(() => import("./DeviceList")));
import DeviceList from "./DeviceList";
import FaultList from "./FaultList";
import {DeviceDashboard } from './index'
// const Devices = Loadable(lazy(() => import("./devices/Devices")));
const deviceRoutes = [
  { path: "/devices", element: <DeviceDashboard /> },
  { path: "/devices/device-list", element: <DeviceList /> },
  { path: "/devices/fault-list", element: <FaultList /> }
];

export default deviceRoutes;
