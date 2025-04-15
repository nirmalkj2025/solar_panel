import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    fontWeight: "bold"
  },
  "& .MuiDataGrid-row": {
    cursor: "pointer"
  },
  "& .MuiDataGrid-cell": {
    color: "#1e293b"
  }
}));

// Define styles per status
const statusStyles = {
  Active: {
    bg: "rgba(40, 169, 145, 0.082)",
    color: "rgb(40, 169, 145)",
    iconColor: "#28a991"
  },
  Maintenance: {
    bg: "rgba(245, 158, 11, 0.12)",
    color: "rgb(245, 158, 11)",
    iconColor: "#f59e0b"
  },
  Fault: {
    bg: "rgba(239, 68, 68, 0.12)",
    color: "rgb(239, 68, 68)",
    iconColor: "#ef4444"
  }
};

const columns = [
  { field: "plantName", headerName: "Plant Name", flex: 1 },
  {
    field: "status",
    headerName: "Plant Status",
    width: 160,
    renderCell: (params) => {
      const { bg, color, iconColor } = statusStyles[params.value] || statusStyles["Active"];
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: bg,
            color: color,
            px: 1.2,
            py: 0.6,
            borderRadius: 2,
            fontSize: 13,
            fontWeight: 500
          }}
        >
          <svg
            style={{
              height: 16,
              width: 16,
              marginRight: 6,
              color: iconColor
            }}
            viewBox="0 0 1024 1024"
          >
            <circle cx="512" cy="512" r="512" fill="currentColor" />
          </svg>
          {params.value}
        </Box>
      );
    }
  },
  { field: "type", headerName: "Plant Type", width: 160 },
  { field: "installedPower", headerName: "Installed Power (MW)", width: 180 },
  { field: "realTimePower", headerName: "Real-time Power (MW)", width: 180 },
  { field: "yieldToday", headerName: "Yield Today (kWh)", width: 160 },
  { field: "monthlyYield", headerName: "Monthly Yield (MWh)", width: 170 },
  { field: "annualYield", headerName: "Annual Yield (MWh)", width: 170 },
  { field: "totalYield", headerName: "Total Yield (MWh)", width: 160 },
  { field: "equivalentHours", headerName: "Equivalent Hours", width: 160 },
  { field: "remarks", headerName: "Remarks", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    renderCell: () => (
      <Button size="small" variant="outlined" color="primary">
        View
      </Button>
    ),
    sortable: false,
    filterable: false
  }
];

const rows = [
  {
    id: 1,
    plantName: "Solar Alpha",
    status: "Active",
    type: "Utility-Scale",
    installedPower: 50,
    realTimePower: 42.3,
    yieldToday: 31000,
    monthlyYield: 720,
    annualYield: 8600,
    totalYield: 120000,
    equivalentHours: 1340,
    remarks: "Operating normally"
  },
  {
    id: 2,
    plantName: "Green Horizon",
    status: "Active",
    type: "Commercial",
    installedPower: 75,
    realTimePower: 65.8,
    yieldToday: 45000,
    monthlyYield: 980,
    annualYield: 11500,
    totalYield: 175000,
    equivalentHours: 1520,
    remarks: "Optimized output"
  },
  {
    id: 3,
    plantName: "Sun Harvest",
    status: "Maintenance",
    type: "Industrial",
    installedPower: 60,
    realTimePower: 0,
    yieldToday: 0,
    monthlyYield: 610,
    annualYield: 7300,
    totalYield: 102000,
    equivalentHours: 1190,
    remarks: "Under scheduled maintenance"
  },
  {
    id: 4,
    plantName: "EcoVolt",
    status: "Active",
    type: "Residential Cluster",
    installedPower: 80,
    realTimePower: 75.1,
    yieldToday: 52000,
    monthlyYield: 1100,
    annualYield: 13000,
    totalYield: 200000,
    equivalentHours: 1600,
    remarks: "Excellent performance"
  },
  {
    id: 5,
    plantName: "Solar Nexus",
    status: "Fault",
    type: "Hybrid",
    installedPower: 40,
    realTimePower: 35.2,
    yieldToday: 27000,
    monthlyYield: 590,
    annualYield: 7100,
    totalYield: 95000,
    equivalentHours: 1130,
    remarks: "Inverter error detected"
  }
];

export default function PlantList() {
  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        autoHeight
      />
    </Container>
  );
}
