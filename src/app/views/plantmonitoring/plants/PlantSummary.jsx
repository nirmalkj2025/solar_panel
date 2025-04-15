import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { green, blue, orange, purple } from "@mui/material/colors";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import InsightsIcon from "@mui/icons-material/Insights";
import ApartmentIcon from "@mui/icons-material/Apartment";

const summaryData = [
  {
    title: "Total Plants",
    value: 12,
    icon: <ApartmentIcon fontSize="large" sx={{ color: blue[500] }} />,
    color: blue[100]
  },
  {
    title: "Total Capacity",
    value: "850 kW",
    icon: <SolarPowerIcon fontSize="large" sx={{ color: orange[600] }} />,
    color: orange[100]
  },
  {
    title: "Energy Generated",
    value: "124,500 kWh",
    icon: <ElectricBoltIcon fontSize="large" sx={{ color: green[600] }} />,
    color: green[100]
  },
  {
    title: "Avg. Performance",
    value: "92%",
    icon: <InsightsIcon fontSize="large" sx={{ color: purple[500] }} />,
    color: purple[100]
  }
];

export default function PlantSummary() {
  return (
    <Grid container spacing={3}>
      {summaryData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: item.color }}>
            <Box display="flex" alignItems="center" gap={2}>
              {item.icon}
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  {item.title}
                </Typography>
                <Typography variant="h6">{item.value}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
