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

// Dummy data for String Monitoring Boxes (SMBs)
const rows = [
  {
    id: 1,
    smbID: "SMB-001",
    voltage: "350V",
    current: "9.5A",
    power: "3.3 kW",
    stringStatus: "Active",
    lastUpdate: "2024-03-20",
    faultStatus: "No Fault"
  },
  {
    id: 2,
    smbID: "SMB-002",
    voltage: "330V",
    current: "8.0A",
    power: "2.64 kW",
    stringStatus: "Inactive",
    lastUpdate: "2024-02-15",
    faultStatus: "Voltage Drop"
  },
  {
    id: 3,
    smbID: "SMB-003",
    voltage: "340V",
    current: "9.0A",
    power: "3.06 kW",
    stringStatus: "Active",
    lastUpdate: "2024-03-12",
    faultStatus: "No Fault"
  },
  {
    id: 4,
    smbID: "SMB-004",
    voltage: "0V",
    current: "0A",
    power: "0 kW",
    stringStatus: "Maintenance",
    lastUpdate: "2024-03-05",
    faultStatus: "Disconnected"
  },
  {
    id: 5,
    smbID: "SMB-005",
    voltage: "345V",
    current: "8.8A",
    power: "3.04 kW",
    stringStatus: "Active",
    lastUpdate: "2024-03-18",
    faultStatus: "No Fault"
  }
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "smbID", headerName: "SMB ID", width: 150 },
  { field: "voltage", headerName: "Voltage (V)", width: 180 },
  { field: "current", headerName: "Current (A)", width: 180 },
  { field: "power", headerName: "Power Output (kW)", width: 180 },
  { field: "stringStatus", headerName: "String Status", width: 180 },
  { field: "lastUpdate", headerName: "Last Update", width: 180 },
  { field: "faultStatus", headerName: "Fault Status", width: 180 }
];

export default function SMBs() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="String Monitoring Boxes (SMBs) List">
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
