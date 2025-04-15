import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import { SimpleCard } from "app/components";

const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

// Dummy data for Meters
const rows = [
  {
    id: 1,
    meterID: "MTR-001",
    status: "Active",
    location: "Plant A",
    energyConsumed: "1500 kWh",
    lastReading: "2024-03-15",
    healthStatus: "Normal",
    meterType: "Energy Meter"
  },
  {
    id: 2,
    meterID: "MTR-002",
    status: "Inactive",
    location: "Plant B",
    energyConsumed: "0 kWh",
    lastReading: "2024-02-20",
    healthStatus: "Faulty",
    meterType: "Energy Meter"
  },
  {
    id: 3,
    meterID: "MTR-003",
    status: "Active",
    location: "Plant C",
    energyConsumed: "1200 kWh",
    lastReading: "2024-03-12",
    healthStatus: "Normal",
    meterType: "Energy Meter"
  },
  {
    id: 4,
    meterID: "MTR-004",
    status: "Maintenance",
    location: "Plant D",
    energyConsumed: "200 kWh",
    lastReading: "2024-03-01",
    healthStatus: "Under Repair",
    meterType: "Water Meter"
  },
  {
    id: 5,
    meterID: "MTR-005",
    status: "Active",
    location: "Plant E",
    energyConsumed: "1000 kWh",
    lastReading: "2024-03-10",
    healthStatus: "Normal",
    meterType: "Energy Meter"
  }
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "meterID", headerName: "Meter ID", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "energyConsumed", headerName: "Energy Consumed", width: 180 },
  { field: "lastReading", headerName: "Last Reading", width: 180 },
  { field: "healthStatus", headerName: "Health Status", width: 180 },
  { field: "meterType", headerName: "Meter Type", width: 150 }
];

export default function Meters() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="Solar Meter List">
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </SimpleCard>
      </Stack>
    </Container>
  );
}
