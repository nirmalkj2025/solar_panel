// import { Fragment } from "react";
// import Grid from "@mui/material/Grid";
// import { styled, useTheme } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Box from "@mui/material/Box";

// // STYLED COMPONENTS
// const ContentBox = styled("div")(({ theme }) => ({
//   margin: "2rem",
//   [theme.breakpoints.down("sm")]: { margin: "1rem" }
// }));

// const StatCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
//   backgroundColor: theme.palette.background.paper
// }));

// const StatRow = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   gap: theme.spacing(2)
// }));

// export default function Analytics() {
//   const { palette } = useTheme();

//   return (
//     <Fragment>
//       <ContentBox className="analytics">
//         <Grid container spacing={3}>
//           {/* Row 1 */}
//           <Grid item xs={12}>
//             <Grid container spacing={2}>
//               {/* Power Card - col-2 */}
//               <Grid item xs={12} md={2}>
//                 <StatCard elevation={3}>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Power
//                   </Typography>
//                   <StatRow>
//                     <Box>
//                       <Typography variant="caption">Real-time Power (W)</Typography>
//                       <Typography variant="h6">0</Typography>
//                     </Box>
//                     <Divider orientation="vertical" flexItem />
//                     <Box>
//                       <Typography variant="caption">Installed Power (MWp)</Typography>
//                       <Typography variant="h6">2.29</Typography>
//                     </Box>
//                   </StatRow>
//                 </StatCard>
//               </Grid>

//               {/* Production Card - col-5 */}
//               <Grid item xs={12} md={5}>
//                 <StatCard elevation={3}>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Production
//                   </Typography>
//                   <StatRow>
//                     <Box>
//                       <Typography variant="caption">Yield Today (MWh)</Typography>
//                       <Typography variant="h6">7.43</Typography>
//                     </Box>
//                     <Divider orientation="vertical" flexItem />
//                     <Box>
//                       <Typography variant="caption">Yield This Month (MWh)</Typography>
//                       <Typography variant="h6">122.61</Typography>
//                     </Box>
//                     <Divider orientation="vertical" flexItem />
//                     <Box>
//                       <Typography variant="caption">Total Yield (GWh)</Typography>
//                       <Typography variant="h6">1.20</Typography>
//                     </Box>
//                   </StatRow>
//                 </StatCard>
//               </Grid>

//               {/* Revenue Card - col-5 */}
//               <Grid item xs={12} md={5}>
//                 <StatCard elevation={3}>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Revenue
//                   </Typography>
//                   <StatRow>
//                     <Box>
//                       <Typography variant="caption">Revenue Today (AED)</Typography>
//                       <Typography variant="h6">3,698.32</Typography>
//                     </Box>
//                     <Divider orientation="vertical" flexItem />
//                     <Box>
//                       <Typography variant="caption">Revenue This Month (AED)</Typography>
//                       <Typography variant="h6">61,360.74</Typography>
//                     </Box>
//                     <Divider orientation="vertical" flexItem />
//                     <Box>
//                       <Typography variant="caption">Total Revenue (AED)</Typography>
//                       <Typography variant="h6">524,347.12</Typography>
//                     </Box>
//                   </StatRow>
//                 </StatCard>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Row 2 */}
//           <Grid item xs={12}>
//             <Grid container spacing={2}>
//               {/* Yield Trend - col-5 */}
//               <Grid item xs={12} md={5}>
//                 <StatCard elevation={3}>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Yield Trend
//                   </Typography>
//                   <Box display="flex" gap={2} mb={1}>
//                     <Typography variant="body2" color="primary">
//                       Week
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Month
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Year
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Total
//                     </Typography>
//                   </Box>
//                   <Divider sx={{ mb: 1 }} />
//                   <Box>
//                     <Typography variant="body2">
//                       Total (MWh): <strong>40.21</strong>
//                     </Typography>
//                     <Typography variant="caption" color="textSecondary">
//                       10/Apr/2025 - 16/Apr/2025
//                     </Typography>
//                     <Typography variant="caption" color="textSecondary">
//                       2025-04-16 00:00:00
//                     </Typography>
//                   </Box>
//                 </StatCard>
//               </Grid>

//               {/* Fault Alarm - col-4 */}
//               <Grid item xs={12} md={4}>
//                 <StatCard elevation={3}>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Fault Alarm
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {/* Add fault alarm details here */}
//                     No active alarms.
//                   </Typography>
//                 </StatCard>
//               </Grid>

//               {/* Plant Information - col-3 */}
//               <Grid item xs={12} md={3}>
//                 <StatCard elevation={3}>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Plant Information
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {/* Add plant info here */}
//                     Location: Abu Dhabi
//                     <br />
//                     Installed: 2.29 MWp
//                   </Typography>
//                 </StatCard>
//               </Grid>
//             </Grid>
//           </Grid>
//           {/* Row 3 */}
//           {/* col-5 */}
//           {/* col-7 */}
//         </Grid>
//       </ContentBox>
//     </Fragment>
//   );
// }
import React from "react";
import { Grid, Divider } from "@mui/material";
// import StatCard from "./StatCard";
import ChartCard from "./ChartCard";
import CustomLineChart from "./LineChart";
import CustomBarChart from "./BarChart";
import HeatMapChart from "./HeatMapChart";
import FancyDoughnutChart from "./FancyDoughnutChart";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: theme.palette.background.paper
}));
const Analytics = () => {
  return (
    <Grid container spacing={3}>
      {/* ---------- STAT CARDS ---------- */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Total Energy Produced" value="12,340 kWh" subValue="Monthly" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Energy Saved" value="₹ 8,456" subValue="Cost savings" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="CO₂ Emissions Avoided"
              value="5.2 tons"
              subValue="Equivalent to 400 trees"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Current Power Output" value="7.4 kW" subValue="Real-time" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ my: 3, borderColor: "#333" }} />
      </Grid>

      {/* ---------- TRENDS IN GRID ---------- */}
      <Grid item xs={12} md={6}>
        <ChartCard title="Energy Production vs. Consumption" subtitle="Day, Week, Month View">
          <CustomLineChart />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Weather vs. Production" subtitle="Irradiance vs Energy">
          <CustomLineChart />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Device Performance" subtitle="Inverters, Meters, Panels">
          <CustomBarChart />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Generation Heatmap" subtitle="Hour vs Day Matrix">
          <HeatMapChart />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Energy Mix" subtitle="Solar, Grid, Battery">
          <FancyDoughnutChart />
        </ChartCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartCard title="Fault Trends Over Time" subtitle="Daily, Weekly Fault Events">
          <CustomLineChart />
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default Analytics;
