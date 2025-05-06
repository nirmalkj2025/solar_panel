const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  {label: "Site Management", type: "label"},
  { name: "Clients", path: "/site-management/clients", icon: "groups" },         // 👥 groups = user group
  { name: "Locations", path: "/site-management/locations", icon: "location_on" }, // 📍 location pin
  { label: "PLANT MONITORING", type: "label" },
  { name: "Plants", path: "/plant-monitoring/plants", icon: "solar_power" },
  { name: "Plant Type Master", path: "/plant-monitoring/plant-type-master", icon: "category" },
  { name: "SMBs", path: "/plant-monitoring/smbs", icon: "developer_board" },
  { name: "Weather Station", path: "/plant-monitoring/weather-station", icon: "cloud" },
  { name: "Battery Storage", path: "/plant-monitoring/battery-storage", icon: "battery_full" },

  { label: "DEVICE", type: "label" },
  { name: "Dashbaord", path: "/devices", icon: "dashboard" },
  { name: "Device List", path: "/devices/device-list", icon: "devices" },
  { name: "Fault List", path: "/devices/fault-list", icon: "report_problem" },
  { name: "Settings", path: "/devices/settings", icon: "settings" },
  { name: "Firmware Update", path: "/devices/firmware-updated", icon: "system_update" },

  { label: "ANALYTICS", type: "label" },
  { name: "Energy Analytics", path: "/analytics/energy-analytics", icon: "analytics" },
  { name: "Alarms & Faults", path: "/analytics/alarms-fauilts", icon: "error_outline" },
  { name: "Reports", path: "/reports", icon: "description" },

  { label: "MANAGEMENT", type: "label" },
  { name: "Maintenance", path: "/maintenance", icon: "build" },
  { name: "Firmware Updates", path: "/firmware", icon: "system_update" },
  { name: "Documents", path: "/documents", icon: "folder" },
  { name: "Map View (GIS)", path: "/gis", icon: "map" },

  { label: "ADMINISTRATION", type: "label" },
  {
    name: "Users",
    icon: "group",
    children: [
      { name: "User List", path: "/users", iconText: "UL" },
      { name: "Roles & Permissions", path: "/roles", iconText: "RP" }
    ]
  },

  { label: "SESSION", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  }
];

export default navigations;
