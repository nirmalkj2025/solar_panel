import React from "react"
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
import { AreaChart, Area, XAxis, YAxis, Tooltip as ReachartsTooltip, LineChart, Line,ResponsiveContainer, PieChart , Pie, Cell, Legend, } from 'recharts';

import Cancel from '@mui/icons-material/Cancel';
import ReportProblem from '@mui/icons-material/ReportProblem';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';
import Info from '@mui/icons-material/Info';
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
import PowerIcon from '@mui/icons-material/BatteryChargingFull'; // or another relevant icon for Power
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // for Efficiency
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'; // for Temperature
// import VoltageIcon from '@mui/icons-material/Voltage'; 
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
import { ContentBox, StatCard, StatRow } from "../dashboard/Analytics";
import MiniLineChart from "./components/MiniLineChart";
import BadgeChip from "./components/BadgeChip";
import MiniGaugeChart from "./components/MiniGaugeChart";
import MiniAreaChart from "./components/MiniAreaCharts";
import BoltIcon from '@mui/icons-material/Bolt';
const data = {
    todayCO2: 22.5,         // in kg
    monthCO2: 1.4,          // in tons
    totalCO2: 35.8,         // in tons
    treesPlanted: 112,      // calculated equivalence
    coalSaved: 9.7          // in tons
  };
export const DeviceDashboard = () => {
    // const theme = useTheme();
    const prTrendData = [
        { day: 'Mon', pr: 78 },
        { day: 'Tue', pr: 81 },
        { day: 'Wed', pr: 84 },
        { day: 'Thu', pr: 82 },
        { day: 'Fri', pr: 80 },
      ];
      
      const irradianceData = [
        { hour: '6 AM', irradiance: 120 },
        { hour: '9 AM', irradiance: 380 },
        { hour: '12 PM', irradiance: 800 },
        { hour: '3 PM', irradiance: 600 },
        { hour: '6 PM', irradiance: 200 },
      ];
      const CircularProgressWithLabel = ({ value }) => (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={value} size={100} thickness={5} sx={{ color: '#00e676' }} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h6" component="div">
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        </Box>
      );
      
    return (
           <Fragment>
              <ContentBox className="device-dashboard" >
                    <Grid container spacing={3}>
{/* new row */}
<Grid item xs={12}>
  <Grid container spacing={2}>
    {/* Inverter */}
    <Grid item xs={12} md={4}>
  <StatCard elevation={3} sx={{ backgroundColor: '#1a1a1a', borderRadius: 2, padding: 3 }}>
    <Typography variant="h6" sx={{ color: '#00ffff', fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
      Inverter Metrics
    </Typography>

    <Stack spacing={3} sx={{ padding: '8px 0' }}>
      {/* Total Inverters */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Total Inverters</Typography>
        </Box>
        <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>12 Inverters</Typography>
      </Box>

      {/* Table - Power Output, Efficiency, Faults */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid grey', paddingBottom: 1 }}>
          <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Power Output</Typography>
          <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>78 kW</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid grey', paddingBottom: 1 }}>
          <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Efficiency</Typography>
          <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>94%</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid grey', paddingBottom: 1 }}>
          <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Faults</Typography>
          <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>3 Faults</Typography>
        </Box>
      </Box>

      {/* Table - Temperature, Voltage */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid grey', paddingBottom: 1 }}>
          <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Temperature</Typography>
          <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>45°C</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 1 }}>
          <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Voltage</Typography>
          <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>420 V</Typography>
        </Box>
      </Box>

      {/* Show Performance Trends (Optional) */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: 'grey.400', fontSize: 14 }}>Performance Trend</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUpIcon sx={{ color: '#00ffff', marginRight: 1 }} />
          <Typography variant="h6" sx={{ color: '#00ffff', fontSize: 20 }}>+2% this week</Typography>
        </Box>
      </Box>
    </Stack>
  </StatCard>
</Grid>







    {/* Battery Metrics - col-4 */}
    {/* <Grid item xs={12} md={4}>
      <StatCard elevation={3}>
        <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
          Battery Metrics
        </Typography>
        <Stack spacing={2}>
          <CircularProgressWithLabel value={85} label="SoC" unit="%" />
          <MiniLineChart title="Voltage" dataKey="voltage" data={[{ time: '10:00', voltage: 52 }, { time: '11:00', voltage: 50 }, { time: '12:00', voltage: 49 }]} />
          <BadgeChip label="Health: 92%" color="success" />
          <BadgeChip label="2 Faults" color="warning" />
        </Stack>
      </StatCard>
    </Grid> */}

    {/* Data Logger Metrics - col-4 */}
    <Grid item xs={12} md={4}>
      <StatCard elevation={3}>
        <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
          Data Logger Metrics
        </Typography>
        <Stack spacing={2}>
          <BadgeChip label="Online" color="success" />
          <MiniAreaChart title="Real-Time Data" dataKey="value" data={[{ time: '10:00', value: 32 }, { time: '11:00', value: 35 }, { time: '12:00', value: 30 }]} />
          <BadgeChip label="1 Error" color="error" />
        </Stack>
      </StatCard>
    </Grid>
  </Grid>
</Grid>

                    <Grid item xs={12}>
  <Grid container spacing={2}>
    {/* Energy Generated by Device */}
    <Grid item xs={12} md={4}>
  <StatCard elevation={3} sx={{ p: 2 }}>
    <Stack spacing={1}>
      <Typography variant="overline" sx={{ color: '#00ffff' }}>
        ⚙️ Energy Generated by Device
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <Stack spacing={0.5}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            1,520 kWh
          </Typography>
          <Typography variant="caption" sx={{ color: 'grey.400' }}>
            Total Today
          </Typography>
        </Stack>
        <Stack spacing={0.5} alignItems="flex-end">
          <Typography variant="caption" sx={{ color: 'success.light' }}>
            ▲ 5.6% since yesterday
          </Typography>
        </Stack>
      </Stack>

      <ResponsiveContainer width="100%" height={120}>
        <BarChart
          layout="vertical"
          data={[
            { name: 'Inverter', energy: 780 },
            { name: 'Battery', energy: 420 },
            { name: 'Hybrid', energy: 320 }
          ]}
          margin={{ top: 0, right: 10, left: -10, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: '#ccc', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e1e1e',
              border: 'none',
              borderRadius: 8,
              color: '#fff',
              fontSize: 12
            }}
          />
          <Bar
            dataKey="energy"
            fill="#00c49f"
            barSize={14}
            radius={[4, 4, 4, 4]}
            background={{ fill: '#2f2f2f' }}
          />
        </BarChart>
      </ResponsiveContainer>

      <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
        <Typography variant="caption" sx={{ color: 'grey.500' }}>
          Inverter: 780 kWh
        </Typography>
        <Typography variant="caption" sx={{ color: 'grey.500' }}>
          Battery: 420 kWh
        </Typography>
        <Typography variant="caption" sx={{ color: 'grey.500' }}>
          Hybrid: 320 kWh
        </Typography>
      </Stack>
    </Stack>
  </StatCard>
</Grid>


    {/* Device Performance Ratio (PR) */}
    <Grid item xs={12} md={4}>
      <StatCard elevation={3}>
        <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
          📈 Device Performance Ratio (PR)
        </Typography>
        <Stack alignItems="center" spacing={1}>
          <GaugeChart
            id="pr-gauge"
            nrOfLevels={20}
            percent={0.82}
            colors={["#FF5F6D", "#FFC371", "#00C49F"]}
            arcWidth={0.3}
            textColor="#fff"
          />
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            PR: 82% Efficiency
          </Typography>
        </Stack>
      </StatCard>
    </Grid>

    {/* Cumulative Energy Yield by Device */}
    <Grid item xs={12} md={4}>
  <StatCard elevation={3}>
    <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
      🧮 Cumulative Energy Yield
    </Typography>
    <Stack alignItems="center" spacing={1} sx={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          data={[
            { month: 'Jan', yield: 100 },
            { month: 'Feb', yield: 220 },
            { month: 'Mar', yield: 450 },
            { month: 'Apr', yield: 730 },
            { month: 'May', yield: 1020 }
          ]}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="yieldColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c49f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00c49f" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fill: '#ccc', fontSize: 11 }} />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e1e1e',
              border: 'none',
              borderRadius: 8,
              fontSize: 12,
              color: '#fff'
            }}
          />
          <Area
            type="monotone"
            dataKey="yield"
            stroke="#00c49f"
            fill="url(#yieldColor)"
            strokeWidth={2}
            dot={{ r: 2, fill: '#00c49f' }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <Typography variant="caption" sx={{ color: 'grey.400' }}>
        Total Yield: 1,020 kWh
      </Typography>
    </Stack>
  </StatCard>
</Grid>

  </Grid>
</Grid>





                {/* 2nd row  with 2 col-6*/}
<Grid item xs={12}>
  <Grid container spacing={2}>
    {/* Device Status / Health - col-6 */}
    <Grid item xs={12} md={6}>
  <StatCard elevation={3}>
    <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
      📟 Device Status / Health
    </Typography>
    <Stack spacing={3}>
      {/* Status Overview */}
      <StatRow justifyContent="space-around">
        <Stack alignItems="center" spacing={0.5}>
          <CheckCircle sx={{ fontSize: 28, color: 'success.main' }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Online
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'success.main' }}>
            120
          </Typography>
        </Stack>
        <Stack alignItems="center" spacing={0.5}>
          <Cancel sx={{ fontSize: 28, color: 'error.main' }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Offline
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
            5
          </Typography>
        </Stack>
        <Stack alignItems="center" spacing={0.5}>
          <ReportProblem sx={{ fontSize: 28, color: 'warning.main' }} />
          <Typography variant="caption" sx={{ color: 'grey.300' }}>
            Faulty
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'warning.main' }}>
            3
          </Typography>
        </Stack>
      </StatRow>

      {/* Uptime */}
      <Box>
        <Typography variant="caption" sx={{ color: 'grey.400', mb: 0.5 }}>
          Uptime (Last 30 Days)
        </Typography>
        <LinearProgress
          variant="determinate"
          value={96}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#2d2d2d',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00c49f'
            }
          }}
        />
        <Typography variant="caption" sx={{ color: 'grey.500', mt: 0.5 }}>
          96% uptime — 28.8 days without failure
        </Typography>
      </Box>

      {/* Age & Maintenance */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="caption" sx={{ color: 'grey.400' }}>
            Device Age
          </Typography>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>
            3 years 2 months
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />
        <Box>
          <Typography variant="caption" sx={{ color: 'grey.400' }}>
            Next Maintenance
          </Typography>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>
            10 July 2025
          </Typography>
        </Box>
      </Box>
    </Stack>
  </StatCard>
</Grid>


    {/* Active Faults / Alarms - col-6 */}
    <Grid item xs={12} md={6}>
  <StatCard elevation={3}>
    <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
      🔔 Active Faults / Alarms
    </Typography>

    <Stack spacing={3}>
      {/* Total Faults Chip */}
      <Box>
        <Typography variant="caption" sx={{ color: 'grey.400' }}>
          Total Active Faults
        </Typography>
        <Chip label="7 Faults" color="error" size="small" sx={{ fontWeight: 'bold', mt: 0.5 }} />
      </Box>

      {/* Fault Categories - Pie Chart */}
      <Box>
        <Typography variant="caption" sx={{ color: 'grey.400' }}>
          Fault Categories by Device
        </Typography>
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={[
                { name: 'Inverters', value: 4 },
                { name: 'Batteries', value: 2 },
                { name: 'Data Loggers', value: 1 }
              ]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              label
              fill="#8884d8"
            >
              <Cell fill="#00c49f" />
              <Cell fill="#ff8042" />
              <Cell fill="#0088fe" />
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Fault Severity - Segmented Bar */}
      <Box>
        <Typography variant="caption" sx={{ color: 'grey.400', mb: 0.5 }}>
          Fault Severity Distribution
        </Typography>
        <Box sx={{ display: 'flex', height: 12, borderRadius: 5, overflow: 'hidden' }}>
          <Box sx={{ flex: 1, bgcolor: 'error.main' }} /> {/* 1/7 = 14% */}
          <Box sx={{ flex: 2, bgcolor: 'warning.main' }} /> {/* 2/7 = 28% */}
          <Box sx={{ flex: 4, bgcolor: 'info.main' }} /> {/* 4/7 = 58% */}
        </Box>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Typography variant="caption" sx={{ color: 'error.main' }}>
            Critical: 1
          </Typography>
          <Typography variant="caption" sx={{ color: 'warning.main' }}>
            Major: 2
          </Typography>
          <Typography variant="caption" sx={{ color: 'info.main' }}>
            Minor: 4
          </Typography>
        </Stack>
      </Box>
    </Stack>
  </StatCard>
</Grid>

  </Grid>
</Grid>

{/* 3row with col-8 and col-4 */}
<Grid item xs={12}>
  <Grid container spacing={2}>
    {/* Performance Ratio (PR) - col-8 */}
    <Grid item xs={12} md={8}>
      <StatCard elevation={3}>
        <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
          Performance Ratio (PR)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Radial Progress for PR */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CircularProgressWithLabel value={82} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Trend Line or Area Graph */}
            <Typography variant="caption" sx={{ color: 'grey.400', mb: 1 }}>
              Weekly Trend (%)
            </Typography>
            <LineChart width={300} height={150} data={prTrendData}>
              <XAxis dataKey="day" />
              <YAxis />
              <ReachartsTooltip />
              <Line type="monotone" dataKey="pr" stroke="#00e676" strokeWidth={2} />
            </LineChart>
          </Grid>
        </Grid>
      </StatCard>
    </Grid>

    {/* Irradiance - col-4 */}
    <Grid item xs={12} md={4}>
      <StatCard elevation={3}>
        <Typography variant="button" sx={{ color: '#00ffff' }} gutterBottom>
          Irradiance (W/m²)
        </Typography>
        <Typography variant="caption" sx={{ color: 'grey.400', mb: 1 }}>
          Daily Solar Exposure
        </Typography>
        <AreaChart width={280} height={180} data={irradianceData}>
          <defs>
            <linearGradient id="irradianceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffca28" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffca28" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="hour" />
          <YAxis />
          <ReachartsTooltip />
          <Area
            type="monotone"
            dataKey="irradiance"
            stroke="#ffca28"
            fillOpacity={1}
            fill="url(#irradianceGradient)"
          />
        </AreaChart>
      </StatCard>
    </Grid>
  </Grid>
</Grid>
</Grid>


              </ContentBox>
            </Fragment>
    )
}