import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { styled } from "@mui/system";
import { SimpleCard } from "app/components";
import Chart from "chart.js/auto"; // Required for chart.js

// Styled container for the component layout
const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

// Dummy data for Energy Analytics
const energyGenerationData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Energy Generated (kWh)",
      data: [1200, 1500, 1600, 1400, 1700, 1800, 1900, 2000, 1600, 1500, 1400, 1300],
      fill: false,
      borderColor: "#00c2ff",
      tension: 0.1
    }
  ]
};

const energyConsumptionData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Energy Consumed (kWh)",
      data: [1000, 1100, 1150, 1200, 1250, 1300, 1400, 1450, 1300, 1200, 1100, 1000],
      fill: false,
      borderColor: "#ff5733",
      tension: 0.1
    }
  ]
};

const energyEfficiencyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Energy Efficiency (%)",
      data: [80, 85, 88, 87, 90, 92, 94, 95, 92, 90, 88, 85],
      fill: false,
      borderColor: "#4caf50",
      tension: 0.1
    }
  ]
};

const batteryStorageData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Battery Storage (kWh)",
      data: [500, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100],
      backgroundColor: "#3f51b5",
      borderRadius: 10
    }
  ]
};

const solarRadiationData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Solar Radiation (W/m²)",
      data: [100, 120, 140, 160, 180, 200, 220, 240, 220, 200, 180, 160],
      fill: false,
      borderColor: "#ffca28",
      tension: 0.1
    }
  ]
};

export default function EnergyAnalytics() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="Energy Generation vs Consumption">
          <Box sx={{ height: 400, width: "100%" }}>
            <Line data={energyGenerationData} />
            <Line data={energyConsumptionData} />
          </Box>
        </SimpleCard>

        <SimpleCard title="Energy Efficiency">
          <Box sx={{ height: 400, width: "100%" }}>
            <Line data={energyEfficiencyData} />
          </Box>
        </SimpleCard>

        <SimpleCard title="Solar Radiation">
          <Box sx={{ height: 400, width: "100%" }}>
            <Line data={solarRadiationData} />
          </Box>
        </SimpleCard>

        <SimpleCard title="Battery Storage">
          <Box sx={{ height: 400, width: "100%" }}>
            <Bar data={batteryStorageData} />
          </Box>
        </SimpleCard>
      </Stack>
    </Container>
  );
}
