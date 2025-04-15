import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import { SimpleCard } from "app/components";

// Styled container for the component layout
const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

// Dummy data for Battery Storage Monitoring
const rows = [
  {
    id: 1,
    batteryID: "BATT-001",
    status: "Active",
    chargeLevel: "75%",
    capacity: "100 kWh",
    efficiency: "92%",
    healthStatus: "Good",
    lastUpdate: "2024-03-20"
  },
  {
    id: 2,
    batteryID: "BATT-002",
    status: "Inactive",
    chargeLevel: "0%",
    capacity: "200 kWh",
    efficiency: "90%",
    healthStatus: "Maintenance",
    lastUpdate: "2024-03-19"
  },
  {
    id: 3,
    batteryID: "BATT-003",
    status: "Active",
    chargeLevel: "50%",
    capacity: "150 kWh",
    efficiency: "88%",
    healthStatus: "Good",
    lastUpdate: "2024-03-18"
  },
  {
    id: 4,
    batteryID: "BATT-004",
    status: "Active",
    chargeLevel: "20%",
    capacity: "120 kWh",
    efficiency: "85%",
    healthStatus: "Warning",
    lastUpdate: "2024-03-17"
  },
  {
    id: 5,
    batteryID: "BATT-005",
    status: "Active",
    chargeLevel: "90%",
    capacity: "250 kWh",
    efficiency: "94%",
    healthStatus: "Good",
    lastUpdate: "2024-03-16"
  }
];

// Columns for DataGrid
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "batteryID", headerName: "Battery ID", width: 180 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "chargeLevel", headerName: "Charge Level", width: 150 },
  { field: "capacity", headerName: "Capacity (kWh)", width: 180 },
  { field: "efficiency", headerName: "Efficiency (%)", width: 150 },
  { field: "healthStatus", headerName: "Health Status", width: 180 },
  { field: "lastUpdate", headerName: "Last Update", width: 180 }
];

export default function BatteryStorage() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="Battery Storage Overview">
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
