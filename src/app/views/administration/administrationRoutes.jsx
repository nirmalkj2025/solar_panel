import { lazy } from "react";
import Loadable from "app/components/Loadable";
// const DeviceList = Loadable(lazy(() => import("./device-list/DeviceList")));
// const DeviceList = Loadable(lazy(() => import("./DeviceList")));
// import DeviceList from "./DeviceList";
// import FaultList from "./FaultList";
import RoleList from "./roles/RoleList";
// import UserList from "./users/UserList";
import AddEditRole from "./roles/AddEditRole";
// const Devices = Loadable(lazy(() => import("./devices/Devices")));
const deviceRoutes = [
  { path: "/roles", element: <RoleList /> },
  { path: "/roles/add-role", element: <AddEditRole /> },
  { path: "/roles/:id", element: <AddEditRole /> }
];

export default deviceRoutes;
