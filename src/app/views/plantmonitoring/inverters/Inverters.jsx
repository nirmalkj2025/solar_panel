import React from "react";
import { Stack, Box, Typography } from "@mui/material";
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

// Dummy data for Inverters with more realistic columns
const rows = [
  {
    id: 1,
    inverterID: "INV-001",
    status: "Active",
    capacity: "5 kW",
    location: "Plant A",
    lastMaintenance: "2024-03-01",
    energyOutput: "4.5 kWh",
    temperature: "45°C",
    healthStatus: "Good"
  },
  {
    id: 2,
    inverterID: "INV-002",
    status: "Inactive",
    capacity: "10 kW",
    location: "Plant B",
    lastMaintenance: "2024-02-20",
    energyOutput: "0 kWh",
    temperature: "40°C",
    healthStatus: "Needs Maintenance"
  },
  {
    id: 3,
    inverterID: "INV-003",
    status: "Active",
    capacity: "8 kW",
    location: "Plant C",
    lastMaintenance: "2024-01-15",
    energyOutput: "7.8 kWh",
    temperature: "42°C",
    healthStatus: "Good"
  },
  {
    id: 4,
    inverterID: "INV-004",
    status: "Maintenance",
    capacity: "3 kW",
    location: "Plant D",
    lastMaintenance: "2024-03-10",
    energyOutput: "0 kWh",
    temperature: "50°C",
    healthStatus: "Critical"
  }
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "inverterID", headerName: "Inverter ID", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "capacity", headerName: "Capacity", width: 130 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "lastMaintenance", headerName: "Last Maintenance", width: 180 },
  { field: "energyOutput", headerName: "Energy Output", width: 180 },
  { field: "temperature", headerName: "Temperature", width: 150 },
  { field: "healthStatus", headerName: "Health Status", width: 160 }
];

export default function Inverters() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="Inverter List">
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
