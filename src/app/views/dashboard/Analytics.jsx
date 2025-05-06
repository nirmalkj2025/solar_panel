import {
  Grid,
  Box,
  Typography,
  Chip,
  Divider,
  useTheme,
  Tooltip,
  Stack,
  IconButton,
  CircularProgress,
  LinearProgress,
  Link,
  Table, TableBody, TableRow, TableCell, TableHead, TableSortLabel,
} from "@mui/material";
import Bolt from '@mui/icons-material/Bolt';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Insights from '@mui/icons-material/Insights';
import Percent from '@mui/icons-material/Percent';
import AvTimer from '@mui/icons-material/AvTimer';
import FlashOn from '@mui/icons-material/FlashOn';
import Speed from '@mui/icons-material/Speed';
import TrendingUp from '@mui/icons-material/TrendingUp';
import DeviceThermostat from '@mui/icons-material/DeviceThermostat';

import { ChevronRight as ChevronRightIcon, EnergySavingsLeaf } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ForestIcon from '@mui/icons-material/Forest';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SpaIcon from '@mui/icons-material/Spa';
import NatureIcon from '@mui/icons-material/Nature';
// import ForestIcon from '@mui/icons-material/Forest';
// import SolarPowerIcon from '@mui/icons-material/SolarPower';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Legend
} from "recharts";
import { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import StarsIcon from "@mui/icons-material/Stars";
import GaugeChart from "react-gauge-chart";
import { BarChart, Bar } from "recharts";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  Sun,
  CloudRain,
  Wind,
  ThermometerSun,
  Droplet,
  CheckCircle,
  AlertCircle,
  Clock,
  Heart,
  ShieldCheck,
  Wrench,
  DatabaseBackup,
  Cpu,
  BadgeCheck,
  ServerCog
} from "lucide-react";
import Spa from '@mui/icons-material/Spa';
const WeatherForecastImpactCard = ({
  yieldForecast = 620,
  minTemp = 24,
  maxTemp = 36,
  condition = "Sunny",
  humidity = 58,
  windSpeed = 12,
  uvIndex = 7,
  forecastConfidence = 92
}) => {
  const getConditionIcon = () => {
    switch (condition.toLowerCase()) {
      case "rainy":
        return <CloudRain size={20} />;
      case "sunny":
        return <Sun size={20} />;
      case "windy":
        return <Wind size={20} />;
      default:
        return <Sun size={20} />;
    }
  };

  return (
    <Grid item xs={12} md={3}>
      <StatCard
        elevation={3}
        sx={{
          bgcolor: "#1c1c1e",
          color: "#fff",
          p: 2,
          border: "1px solid #2e2e2e",
          borderRadius: 4,
          boxShadow: "0 0 10px rgba(0, 95, 255, 0.15)"
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight={600}>
            {getConditionIcon()} &nbsp; Tomorrow's Forecast
          </Typography>
          <Typography variant="caption" sx={{ color: "#bbb" }}>
            Confidence: {forecastConfidence}%
          </Typography>
        </Box>

        <Box mb={1}>
          <Typography variant="h6" sx={{ color: "#00e676" }}>
            {condition} — {yieldForecast} kWh
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
            Based on current weather prediction model.
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Tooltip title="Expected solar yield">
              <LinearProgress
                variant="determinate"
                value={(yieldForecast / 1000) * 100}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#333",
                  "& .MuiLinearProgress-bar": { backgroundColor: "#00e676" }
                }}
              />
            </Tooltip>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <ThermometerSun size={16} />
            <Typography variant="caption">Min: {minTemp}°C</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <ThermometerSun size={16} />
            <Typography variant="caption">Max: {maxTemp}°C</Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={1.5}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Droplet size={16} />
            <Typography variant="caption">Humidity: {humidity}%</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Wind size={16} />
            <Typography variant="caption">Wind: {windSpeed} km/h</Typography>
          </Box>
        </Box>

        <Box mt={1} display="flex" justifyContent="flex-start" gap={1}>
          <Typography variant="caption" sx={{ color: "#888" }}>
            UV Index: {uvIndex}
          </Typography>
        </Box>
      </StatCard>
    </Grid>
  );
};
const InfoTable = ({ rows }) => (
  <Table size="small" sx={{ mt: 1 }}>
    <TableBody>
      {rows.map(({ label, value, tooltip }) => (
        <TableRow key={label}>
          <TableCell sx={{ color: "#aaa", borderBottom: "none", pr: 1 }}>
            <Tooltip title={tooltip || label} arrow>
              <span>{label}</span>
            </Tooltip>
          </TableCell>
          <TableCell
            sx={{ color: "#fff", fontWeight: 500, borderBottom: "none", whiteSpace: "nowrap" }}
          >
            {value}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const BlockchainAnalyticsCard = () => (
  <Grid item xs={12} sm={12} md={6} lg={4}>
    <StatCard
      elevation={3}
      sx={{
        bgcolor: "#1c1c1e",
        color: "#fff",
        p: 2,
        border: "1px solid #2e2e2e",
        borderRadius: 4,
        boxShadow: "0 0 12px rgba(0, 95, 255, 0.2)",
        minHeight: "100%",
      }}
    >
      <Box mb={1}>
        <Typography variant="subtitle1" fontWeight={600}>
          <Cpu size={18} /> &nbsp; Blockchain Analytics
        </Typography>
        <Typography variant="caption" sx={{ color: "#bbb" }}>
          Distributed ledger assurance
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#333", mb: 1.5 }} />

      <InfoTable
        rows={[
          {
            label: "Chain Status",
            value: "✔ Verified (Device + Logs)",
            tooltip: "Device and logs are registered on-chain",
          },
          {
            label: "Update Window",
            value: "Last: Apr 17 • First: Jun 13",
            tooltip: "Time range of blockchain updates",
          },
          {
            label: "Fault Log",
            value: "✔ Auto-Healed, 3m 28s",
            tooltip: "Last issue: Inverter failure (recovered)",
          },
          {
            label: "Maint. Record",
            value: "SysBot v2.1 • IPFS stored",
            tooltip: "Last maintenance was blockchain stamped",
          },
          {
            label: "Smart Contracts",
            value: "v3.4 • Multi-Sig",
            tooltip: "Triggers: SLA breach, Firmware update",
          },
        ]}
      />

      <Box mt={1.5} display="flex" flexWrap="wrap" gap={1}>
        <Chip label="Audit Ready" size="small" color="info" />
        <Chip label="Chain Verified" size="small" color="success" />
        <Chip label="Auto-Heal" size="small" color="warning" />
        <Chip label="Smart Triggered" size="small" sx={{ bgcolor: "#512da8", color: "#fff" }} />
      </Box>
    </StatCard>
  </Grid>
);

const BatteryStorageCard = ({ soc = 78, discharged = 12.6, health = 92, backupTime = 3.5 }) => {
  const batteryColor = soc >= 75 ? "success" : soc >= 40 ? "warning" : "error";
  const formattedBackupTime = backupTime.toFixed(1);

  return (
    <Grid item xs={12} md={3}>
      <Box
        sx={{
          bgcolor: "#1c1c1e",
          color: "#fff",
          borderRadius: 2,
          p: 3,
          height: "100%",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ borderBottom: "2px solid #005fff", pb: 0.5, color: "#fff" }}
          >
            Battery Insights
          </Typography>
          <BatteryChargingFullIcon size={24} color="#05f" />
        </Box>

        {/* Content */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          {/* Circular Progress for SOC */}
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={soc}
              size={90}
              thickness={6}
              color={batteryColor}
              sx={{ "& .MuiCircularProgress-circle": { transition: "stroke-dasharray 0.5s ease" } }}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6" component="div" color="white" fontSize={20}>
                {`${soc}%`}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Battery Details */}
        <Stack spacing={1} alignItems="center">
          <Tooltip title="Total energy discharged from the battery today" arrow>
            <Box display="flex" alignItems="center" gap={1}>
              <Clock size={16} />
              <Typography variant="body2" color="info.main">
                Discharged: <strong>{discharged} kWh</strong> today
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Current health status of the battery" arrow>
            <Box display="flex" alignItems="center" gap={1}>
              <Heart size={16} />
              <Typography variant="body2" color="info.main">
                Health: <strong>{health}%</strong>
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Estimated time the battery can last based on current load" arrow>
            <Box display="flex" alignItems="center" gap={1}>
              <Clock size={16} />
              <Typography variant="body2" color="info.main">
                Est. Backup Time: <strong>{formattedBackupTime} hrs</strong>
              </Typography>
            </Box>
          </Tooltip>
        </Stack>
      </Box>
    </Grid>
  );
};

// components/EnergyExportCard.jsx
const data = [
  { name: "Today", Exported: 60, Consumed: 40 },
  { name: "Yesterday", Exported: 55, Consumed: 45 }
];
const defaultEnergyExportCardData = [
  { name: "Today", Consumed: 480, ExportToGrid: 320, ExportToBattery: 150, DischargedFromBattery: 100 },
  { name: "Yesterday", Consumed: 450, ExportToGrid: 280, ExportToBattery: 130, DischargedFromBattery: 90 },
  { name: "This Week", Consumed: 3100, ExportToGrid: 1900, ExportToBattery: 900, DischargedFromBattery: 700 }
];
const EnergyExportCard = ({ data = defaultEnergyExportCardData }) => {
  return (
    <Grid item xs={12} md={5}>
      <Box
        elevation={3}
        sx={{
          bgcolor: "#1c1c1e",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ borderLeft: "4px solid #00e676", pl: 1 }}
          >
            Export vs Consumption
          </Typography>
        </Box>

        {/* Purpose Text */}
        <Typography variant="caption" color="gray" mb={2} display="block">
          Tracks local energy use, exports to grid, battery storage, and discharges —
          optimizing for self-consumption and smart storage decisions.
        </Typography>

        {/* Chart */}
        <Box height={300}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#2c2c2e", border: "none", color: "#fff" }} />
              <Legend />
              <Bar dataKey="Consumed" fill="#ff9100" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ExportToGrid" fill="#00e676" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ExportToBattery" fill="#2979ff" radius={[4, 4, 0, 0]} />
              <Bar dataKey="DischargedFromBattery" fill="#f50057" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Grid>
  );
};

const PerformanceRatioCard = ({ value = 0.825 }) => {
  return (
    <Grid item xs={12} md={4}>
      <StatCard elevation={3} sx={{ bgcolor: "#1c1c1e", color: "#fff" }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Performance Ratio
          </Typography>
          <GaugeChart
            id="pr-gauge"
            nrOfLevels={20}
            percent={value}
            colors={["#ff4d4d", "#00e676"]}
            arcWidth={0.2}
            textColor="white"
          />
        </Box>
      </StatCard>
    </Grid>
  );
};
const SystemUptimeCard = ({ uptime = 99.94, target = 99.9, outages = 2, downtimeMinutes = 37 }) => {
  const uptimeStatusColor = uptime >= target ? "#00e676" : "#ff5252";
  const uptimePercent = Math.min(uptime, 100); // cap at 100%

  return (
    <Grid item xs={12} md={4}>
      <StatCard
        elevation={3}
        sx={{
          bgcolor: "#1c1c1e",
          color: "#fff",
          p: 2,
          border: "1px solid #2e2e2e",
          borderRadius: 4,
          boxShadow: "0 0 10px rgba(0, 95, 255, 0.15)"
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle1" fontWeight={600}>
            <Clock size={18} style={{ marginRight: 6 }} />
            System Uptime
          </Typography>
          <Typography variant="caption" color="gray">
            Monthly Report
          </Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="h4" sx={{ color: uptimeStatusColor }}>
            {uptime.toFixed(2)}%
          </Typography>
          <Typography variant="caption" sx={{ color: "#bbb" }}>
            SLA Target: {target}%
          </Typography>

          <LinearProgress
            variant="determinate"
            value={uptimePercent}
            sx={{
              mt: 1,
              height: 8,
              borderRadius: 5,
              backgroundColor: "#333",
              "& .MuiLinearProgress-bar": { backgroundColor: uptimeStatusColor }
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between" mt={1}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <AlertCircle size={16} />
            <Typography variant="caption">Outages: {outages}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <CheckCircle size={16} />
            <Typography variant="caption">Downtime: {downtimeMinutes} min</Typography>
          </Box>
        </Box>
      </StatCard>
    </Grid>
  );
};
const DeviceStatusBreakdownCard = ({ status = { online: 8, offline: 1, fault: 2 } }) => {
  const navigate = useNavigate();

  const handleDevicePageRedirect = () => {
    navigate("/devices");
  };

  const rowStyle = {
    px: 2,
    py: 1,
    border: "1px solid #2c2c2e",
    borderRadius: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "#2c2c2e",
    color: "#fff"
  };

  return (
    <Grid item xs={12} md={4}>
      <StatCard elevation={3} sx={{ bgcolor: "#1c1c1e", color: "#fff", p: 2 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              borderBottom: "2px solid #005fff",
              pb: 0.5,
              pr: 1,
              display: "inline-block",
              color: "#fff"
            }}
          >
            Device Status Breakdown
          </Typography>
          <IconButton
            onClick={handleDevicePageRedirect}
            sx={{ color: "#fff", "&:hover": { color: "#005fff" } }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Device Status Table */}
        <Stack spacing={1}>
          <Box sx={rowStyle}>
            <Typography variant="body2" fontWeight={500}>
              Online Devices
            </Typography>
            <Chip label={status.online} color="success" size="small" />
          </Box>
          <Box sx={rowStyle}>
            <Typography variant="body2" fontWeight={500}>
              Offline Devices
            </Typography>
            <Chip label={status.offline} color="warning" size="small" />
          </Box>
          <Box sx={rowStyle}>
            <Typography variant="body2" fontWeight={500}>
              Fault Devices
            </Typography>
            <Chip label={status.fault} color="error" size="small" />
          </Box>
        </Stack>
      </StatCard>
    </Grid>
  );
};

const PlantInformationCard = ({ plant }) => {
  const isSuperAdmin = !plant?.name;

  const display = {
    title: isSuperAdmin ? "All Plants" : plant.name,
    location: isSuperAdmin ? "All Locations" : plant.location,
    capacity: isSuperAdmin ? "120 MWp (Total)" : plant.capacity,
    status: isSuperAdmin ? "All Systems Monitored" : plant.status,
    tier: isSuperAdmin ? "Enterprise" : plant.tier
  };

  return (
    <Grid item xs={12} md={3}>
      <StatCard elevation={3}>
        <Box
          sx={{
            bgcolor: "#1e1e1e",
            borderRadius: 2,
            p: 2.5,
            color: "#fff",
            height: "100%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
          }}
        >
          {/* Title & Tier */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              {display.title}
            </Typography>
            <Chip
              label={display.tier}
              icon={<StarsIcon sx={{ fontSize: 16 }} />}
              size="small"
              sx={{
                backgroundColor: "#005fff",
                color: "#fff",
                fontWeight: 500,
                fontSize: 11,
                px: 1
              }}
            />
          </Box>

          {/* Location */}
          <Box display="flex" alignItems="center" gap={1} mb={0.8}>
            <LocationOnIcon sx={{ fontSize: 16, color: "#81d4fa" }} />
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              {display.location}
            </Typography>
          </Box>

          {/* Capacity */}
          <Box display="flex" alignItems="center" gap={1} mb={0.8}>
            <EnergySavingsLeafIcon sx={{ fontSize: 16, color: "#fdd835" }} />
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              {display.capacity}
            </Typography>
          </Box>

          {/* Status */}
          <Box display="flex" alignItems="center" gap={1}>
            <SignalCellularAltIcon sx={{ fontSize: 16, color: "#64ffda" }} />
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              {display.status}
            </Typography>
          </Box>
        </Box>
      </StatCard>
    </Grid>
  );
};

// Dummy data for Week, Month, Year, and Total
const yieldData = {
  week: [
    { name: "10 Apr", yield: 5.6 },
    { name: "11 Apr", yield: 6.2 },
    { name: "12 Apr", yield: 5.9 },
    { name: "13 Apr", yield: 6.8 },
    { name: "14 Apr", yield: 7.0 },
    { name: "15 Apr", yield: 4.8 },
    { name: "16 Apr", yield: 3.9 }
  ],
  month: [
    { name: "Week 1", yield: 15.2 },
    { name: "Week 2", yield: 20.1 },
    { name: "Week 3", yield: 19.3 },
    { name: "Week 4", yield: 18.7 }
  ],
  year: [
    { name: "Jan", yield: 50.0 },
    { name: "Feb", yield: 45.0 },
    { name: "Mar", yield: 48.5 },
    { name: "Apr", yield: 40.21 }
    // Additional months...
  ],
  total: [{ name: "Total", yield: 350.0 }]
};

// Utility to calculate total yield
const getTotalYield = (data) => {
  return data.reduce((acc, item) => acc + item.yield, 0).toFixed(2);
};

// Utility to format date range from chart data
const getDateRange = (data) => {
  if (!data.length) return "";
  const start = data[0].name;
  const end = data[data.length - 1].name;
  return `${start} - ${end}`;
};

// Dynamic timestamp
const getLastUpdated = () => {
  const now = new Date();
  return now.toISOString().replace("T", " ").substring(0, 19); // e.g., 2025-04-16 14:25:00
};
const YieldTrendCard = () => {
  const [selectedRange, setSelectedRange] = useState("Week");
  const [chartData, setChartData] = useState(yieldData.week);

  // Function to handle time range selection
  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    // Set chart data based on the selected time range
    if (range === "Week") {
      setChartData(yieldData.week); // Data for the week
    } else if (range === "Month") {
      setChartData(yieldData.month); // Data for the month
    } else if (range === "Year") {
      setChartData(yieldData.year); // Data for the year
    } else {
      setChartData(yieldData.total); // Data for total
    }
  };

  return (
    <Grid item xs={12} md={5}>
      <StatCard elevation={3}>
        <Typography variant="subtitle1" color="success" gutterBottom>
          Yield Trend
        </Typography>

        {/* Time range selector */}
        <Box display="flex" gap={2} mb={1}>
          {["Week", "Month", "Year", "Total"].map((range, index) => (
            <Typography
              key={range}
              variant="body2"
              color={selectedRange === range ? "primary" : "#fff"}
              sx={{
                cursor: "pointer",
                fontWeight: selectedRange === range ? 600 : 400,
                textDecoration: selectedRange === range ? "underline" : "none"
              }}
              onClick={() => handleRangeSelect(range)}
            >
              {range}
            </Typography>
          ))}
        </Box>

        {/* Divider */}
        <Divider sx={{ mb: 1 }} />

        {/* Chart and values */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Box>
            <Typography variant="body2" color="primary" gutterBottom>
              Total Yield (MWh): <strong>{getTotalYield(chartData)}</strong>
            </Typography>
            <Typography variant="caption" color="#fff">
              {getDateRange(chartData)}
            </Typography>
            {/* <Box sx={{ textAlign: 'right', color: '#fff', fontSize: '0.8rem' }}>
      Last Updated: {getLastUpdated()}
    </Box> */}
          </Box>

          {/* Sparkline Chart */}
          <Box height={200}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ left: -40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", borderRadius: 4, fontSize: 12 }}
                  labelStyle={{ fontWeight: 600 }}
                />
                <Line
                  type="monotone"
                  dataKey="yield"
                  stroke="#007aff"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <ReferenceLine y={0} stroke="#000" strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </StatCard>
    </Grid>
  );
};

const faults = [
  {
    level: "Critical",
    device: "Inverter A",
    message: "DC Overvoltage Detected",
    timestamp: "2025-04-16 00:10:00"
  },
  {
    level: "Warning",
    device: "Meter B",
    message: "Communication Delay",
    timestamp: "2025-04-15 23:40:00"
  }
];

const FaultAlarmCard = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4}>
      <StatCard elevation={3} sx={{ bgcolor: "#1c1c1e", color: "#fff" }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" sx={{ color: "red", fontWeight: "regular" }}>
            Fault Alarms
          </Typography>
          <Chip
            label={`${faults.length} Active`}
            color="error"
            size="small"
            icon={<ErrorOutlineIcon fontSize="small" />}
            sx={{ backgroundColor: "#ff1744", color: "#fff" }}
          />
        </Box>

        <Divider sx={{ bgcolor: "#333", mb: 2 }} />

        {/* Fault Details */}
        {faults.length > 0 ? (
          faults.map((fault, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#ff6f61" }}>
                {fault.level} - {fault.device}
              </Typography>
              <Typography variant="caption" sx={{ color: "#cccccc" }}>
                {fault.message}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#999", display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <AccessTimeIcon sx={{ fontSize: 14 }} /> {fault.timestamp}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: "#999" }}>
            No active alarms.
          </Typography>
        )}

        <Divider sx={{ bgcolor: "#333", my: 2 }} />

        {/* AI Healing Insight */}
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <AutoFixHighIcon sx={{ color: "#00e676" }} fontSize="small" />
          <Typography variant="caption" sx={{ color: "#b2fab4" }}>
            AI has auto-corrected minor issues by adjusting operational parameters and rebooting
            modules remotely.
          </Typography>
        </Box>

        {/* Footer */}
        <Typography
          variant="caption"
          sx={{ color: "#888", display: "flex", alignItems: "center", gap: 0.5 }}
        >
          <AccessTimeIcon sx={{ fontSize: 14 }} /> Last Updated: {new Date().toLocaleString()}
        </Typography>
      </StatCard>
    </Grid>
  );
};

// STYLED COMPONENTS
export const ContentBox = styled("div")(({ theme }) => ({
  margin: "1rem",
  padding: "1rem",
  backgroundColor: "#0D0D0D",
  [theme.breakpoints.down("sm")]: { margin: "1rem" }
}));

export const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.05)", // subtle glassy look
  backdropFilter: "blur(8px)", // frosted glass effect
  WebkitBackdropFilter: "blur(8px)", // Safari support
  border: "1px solid rgba(255, 255, 255, 0.1)", // soft glass border
  borderRadius: "16px", // smooth, modern corners
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)", // soft depth
  transition: "all 0.3s ease-in-out",

  // Optional: hover glow effect
  "&:hover": {
    boxShadow: "0 12px 30px rgba(0, 255, 255, 0.2)",
    borderColor: "rgba(0, 255, 255, 0.3)"
  }
}));

export const StatRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  color: "#D1D5DB"
}));

export default function Analytics() {
  const { palette } = useTheme();
  const data = {
    todayCO2: 1927.38,        // kg
    monthCO2: 26.38,          // tons
    totalCO2: 486.73,         // tons
    treesPlanted: 67967,      // trees
    coalSaved: 67967,         // tons
  };
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          {/* Row 1 */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Power Card - col-2 */}
              {/* Energy Metrics - col-2 */}
              <Grid item xs={12} md={2}>
  <StatCard elevation={3}>
    <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
      Energy Snapshot
    </Typography>
    <Stack spacing={2}>
      <StatRow>
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FlashOn sx={{ fontSize: 30, color: 'warning.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Real-time Power (kW)
          </Typography>
          <Typography variant="h6" sx={{ color: 'warning.main' }}>
            1,152.34
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Bolt sx={{ fontSize: 30, color: 'info.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Installed Capacity (MWp)
          </Typography>
          <Typography variant="h6" sx={{ color: 'info.main' }}>
            2.29
          </Typography>
        </Box>
      </StatRow>

      <Divider sx={{ my: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

      <StatRow>
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TrendingUp sx={{ fontSize: 30, color: 'secondary.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Daily Yield (kWh/kWp)
          </Typography>
          <Typography variant="h6" sx={{ color: 'secondary.main' }}>
            4.85
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Speed sx={{ fontSize: 30, color: 'primary.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Efficiency (%)
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            95.6
          </Typography>
        </Box>
      </StatRow>
    </Stack>
  </StatCard>
</Grid>


              {/* Generation Overview - col-5 */}
              <Grid item xs={12} md={5}>
  <StatCard elevation={3}>
  <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
  Generation Overview
</Typography>
    <Stack spacing={2}>
      <StatRow>
      <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Bolt sx={{ fontSize: 30, color: 'warning.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Energy Today (kWh)
          </Typography>
          <Typography variant="h6" sx={{ color: 'warning.main' }}>
            2,814.47
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CalendarMonth sx={{ fontSize: 30, color: 'info.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Energy This Month (MWh)
          </Typography>
          <Typography variant="h6" sx={{ color: 'info.main' }}>
            122.61
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Insights sx={{ fontSize: 30, color: 'success.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Total Generation (MWh)
          </Typography>
          <Typography variant="h6" sx={{ color: 'success.main' }}>
            1,203.42
          </Typography>
        </Box>
      </StatRow>

      <Divider sx={{ my: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

      <StatRow>
      <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Percent sx={{ fontSize: 30, color: 'secondary.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Performance Ratio (%)
          </Typography>
          <Typography variant="h6" sx={{ color: 'secondary.main' }}>
            82.5
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AvTimer sx={{ fontSize: 30, color: 'primary.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            System Uptime (%)
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            99.8
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FlashOn sx={{ fontSize: 30, color: 'error.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Peak Power (kW)
          </Typography>
          <Typography variant="h6" sx={{ color: 'error.main' }}>
            350.2
          </Typography>
        </Box>
      </StatRow>
    </Stack>
  </StatCard>
</Grid>



              {/* Environmental Impact - col-5 */}
            
              <Grid item xs={12} md={5}>
  <StatCard elevation={3} sx={{ p: 2 }}>
    <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
      Environmental Impact
    </Typography>

    <Stack spacing={2}>
      <StatRow>
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Spa sx={{ fontSize: 30, color: 'success.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            CO₂ Saved Today (kg)
          </Typography>
          <Typography variant="h6" sx={{ color: 'success.main' }}>
            {data.todayCO2.toLocaleString()}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Spa sx={{ fontSize: 30, color: 'success.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            CO₂ This Month (tons)
          </Typography>
          <Typography variant="h6" sx={{ color: 'success.main' }}>
            {data.monthCO2.toLocaleString()}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Spa sx={{ fontSize: 30, color: 'success.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Total CO₂ Saved (tons)
          </Typography>
          <Typography variant="h6" sx={{ color: 'success.main' }}>
            {data.totalCO2.toLocaleString()}
          </Typography>
        </Box>
      </StatRow>

      <Divider sx={{ my: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

      <StatRow>
        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ForestIcon sx={{ fontSize: 30, color: 'success.dark', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Equivalent Trees Planted
          </Typography>
          <Typography variant="h6" sx={{ color: 'success.main' }}>
            {data.treesPlanted.toLocaleString()}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WhatshotIcon sx={{ fontSize: 30, color: 'warning.main', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Saved Coal (tons)
          </Typography>
          <Typography variant="h6" sx={{ color: 'warning.main' }}>
            {data.coalSaved.toLocaleString()}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EnergySavingsLeaf sx={{ fontSize: 30, color: 'success.dark', mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Emission Reduction (tons)
          </Typography>
          <Typography variant="h6" sx={{ color: 'success.dark' }}>
            {((data.totalCO2 * 1.25).toFixed(2)).toLocaleString()}
          </Typography>
        </Box>
      </StatRow>
    </Stack>
  </StatCard>
</Grid>

            </Grid>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Yield Trend - col-5 */}
              <YieldTrendCard />

              {/* Fault Alarm - col-4 */}
              <FaultAlarmCard />

              {/* Plant Information - col-3 */}
              <PlantInformationCard />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <PerformanceRatioCard />
              <SystemUptimeCard />
              <DeviceStatusBreakdownCard />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <BatteryStorageCard /> <EnergyExportCard /> <BlockchainAnalyticsCard />
            </Grid>
          </Grid>

          {/* Row 3 */}
          {/* col-5 */}
          {/* col-7 */}
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
