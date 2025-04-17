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
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
    <Grid item xs={12} md={4}>
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
  { name: "Today", Exported: 320, Consumed: 480 },
  { name: "Yesterday", Exported: 280, Consumed: 450 },
  { name: "This Week", Exported: 1900, Consumed: 3100 }
];
const EnergyExportCard = ({ data = defaultEnergyExportCardData }) => {
  return (
    <Grid item xs={12} md={4}>
      <StatCard elevation={3} sx={{ bgcolor: "#1c1c1e", color: "#fff", p: 2 }}>
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
        <Typography variant="caption" color="gray" mb={2}>
          Tracks energy used locally vs exported to the grid. Helps optimize for higher
          self-consumption and storage decisions.
        </Typography>

        {/* Chart */}
        <Box height={250}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: "#2c2c2e", border: "none", color: "#fff" }}
              />
              <Legend />
              <Bar dataKey="Consumed" fill="#ff9100" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Exported" fill="#00e676" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </StatCard>
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
            <SolarPowerIcon sx={{ fontSize: 16, color: "#fdd835" }} />
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
const ContentBox = styled("div")(({ theme }) => ({
  margin: "1rem",
  padding: "1rem",
  backgroundColor: "#0D0D0D",
  [theme.breakpoints.down("sm")]: { margin: "1rem" }
}));

const StatCard = styled(Paper)(({ theme }) => ({
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

const StatRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  color: "#D1D5DB"
}));

export default function Analytics() {
  const { palette } = useTheme();

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
                  <Typography variant="subtitle2" color="success" gutterBottom>
                    Energy Snapshot
                  </Typography>
                  <StatRow>
                    <Box>
                      <Typography variant="caption">Real-time Power (kW)</Typography>
                      <Typography variant="h6">1,152.34</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        bgcolor: "background.paper"
                      }}
                    />
                    <Box>
                      <Typography variant="caption">Installed Capacity (MWp)</Typography>
                      <Typography variant="h6">2.29</Typography>
                    </Box>
                  </StatRow>
                </StatCard>
              </Grid>

              {/* Generation Overview - col-5 */}
              <Grid item xs={12} md={5}>
                <StatCard elevation={3}>
                  <Typography variant="subtitle2" color="success" gutterBottom>
                    Generation Overview
                  </Typography>
                  <StatRow>
                    <Box>
                      <Typography variant="caption">Energy Today (kWh)</Typography>
                      <Typography variant="h6">2,814.47</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        bgcolor: "background.paper"
                      }}
                    />
                    <Box>
                      <Typography variant="caption">Energy This Month (MWh)</Typography>
                      <Typography variant="h6">122.61</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        bgcolor: "background.paper"
                      }}
                    />
                    <Box>
                      <Typography variant="caption">Total Generation (MWh)</Typography>
                      <Typography variant="h6">1,203.42</Typography>
                    </Box>
                  </StatRow>
                </StatCard>
              </Grid>

              {/* Environmental Impact - col-5 */}
              <Grid item xs={12} md={5}>
                <StatCard elevation={3}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Environmental Impact
                  </Typography>
                  <StatRow>
                    <Box>
                      <Typography variant="caption">CO₂ Saved Today (kg)</Typography>
                      <Typography variant="h6">1,927.38</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        bgcolor: "background.paper"
                      }}
                    />
                    <Box>
                      <Typography variant="caption">CO₂ Saved This Month (tons)</Typography>
                      <Typography variant="h6">26.38</Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        bgcolor: "background.paper"
                      }}
                    />
                    <Box>
                      <Typography variant="caption">Total CO₂ Saved (tons)</Typography>
                      <Typography variant="h6">486.73</Typography>
                    </Box>
                  </StatRow>
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

// import React from "react";
// import { Grid, Divider } from "@mui/material";
// // import StatCard from "./StatCard";
// import ChartCard from "./ChartCard";
// import CustomLineChart from "./LineChart";
// import CustomBarChart from "./BarChart";
// import HeatMapChart from "./HeatMapChart";
// import FancyDoughnutChart from "./FancyDoughnutChart";
// import styled from "@emotion/styled";
// import { Paper } from "@mui/material";
// const StatCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
//   backgroundColor: theme.palette.background.paper
// }));
// const Analytics = () => {
//   return (
//     <Grid container spacing={3}>
//       {/* ---------- STAT CARDS ---------- */}
//       <Grid item xs={12}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatCard title="Total Energy Produced" value="12,340 kWh" subValue="Monthly" />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatCard title="Energy Saved" value="₹ 8,456" subValue="Cost savings" />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatCard
//               title="CO₂ Emissions Avoided"
//               value="5.2 tons"
//               subValue="Equivalent to 400 trees"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatCard title="Current Power Output" value="7.4 kW" subValue="Real-time" />
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid item xs={12}>
//         <Divider sx={{ my: 3, borderColor: "#333" }} />
//       </Grid>

//       {/* ---------- TRENDS IN GRID ---------- */}
//       <Grid item xs={12} md={6}>
//         <ChartCard title="Energy Production vs. Consumption" subtitle="Day, Week, Month View">
//           <CustomLineChart />
//         </ChartCard>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <ChartCard title="Weather vs. Production" subtitle="Irradiance vs Energy">
//           <CustomLineChart />
//         </ChartCard>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <ChartCard title="Device Performance" subtitle="Inverters, Meters, Panels">
//           <CustomBarChart />
//         </ChartCard>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <ChartCard title="Generation Heatmap" subtitle="Hour vs Day Matrix">
//           <HeatMapChart />
//         </ChartCard>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <ChartCard title="Energy Mix" subtitle="Solar, Grid, Battery">
//           <FancyDoughnutChart />
//         </ChartCard>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <ChartCard title="Fault Trends Over Time" subtitle="Daily, Weekly Fault Events">
//           <CustomLineChart />
//         </ChartCard>
//       </Grid>
//     </Grid>
//   );
// };

// export default Analytics;
