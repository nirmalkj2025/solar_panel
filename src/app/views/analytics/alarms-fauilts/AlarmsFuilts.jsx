import React, { useState } from "react";
import { Stack, Box, Typography, Chip, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import { SimpleCard } from "app/components";
import { SeverityHigh, SeverityLow } from "@mui/icons-material";

// Styled container for the page
const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

// Dummy data for alarms and faults
const rows = [
  {
    id: 1,
    alarmID: "ALM-001",
    severity: "High",
    component: "Inverter",
    status: "Active",
    timestamp: "2025-04-15 08:30",
    description: "Overtemperature in Inverter"
  },
  {
    id: 2,
    alarmID: "ALM-002",
    severity: "Low",
    component: "SMB",
    status: "Resolved",
    timestamp: "2025-04-14 16:45",
    description: "String Current drop below threshold"
  },
  {
    id: 3,
    alarmID: "ALM-003",
    severity: "Medium",
    component: "Battery",
    status: "Active",
    timestamp: "2025-04-15 10:00",
    description: "Battery voltage low"
  },
  {
    id: 4,
    alarmID: "ALM-004",
    severity: "High",
    component: "Weather Station",
    status: "Acknowledged",
    timestamp: "2025-04-14 12:30",
    description: "Weather sensor malfunction"
  }
];

// Columns for the DataGrid
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "alarmID", headerName: "Alarm ID", width: 150 },
  {
    field: "severity",
    headerName: "Severity",
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === "High" ? "error" : params.value === "Medium" ? "warning" : "success"
        }
        icon={params.value === "High" ? <SeverityHigh /> : <SeverityLow />}
      />
    )
  },
  { field: "component", headerName: "Component", width: 180 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "timestamp", headerName: "Timestamp", width: 180 },
  { field: "description", headerName: "Description", width: 300 }
];

// Component for the Alarms and Faults
export default function AlarmsFaults() {
  const [statusFilter, setStatusFilter] = useState("All");

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  const filteredRows =
    statusFilter === "All" ? rows : rows.filter((row) => row.status === statusFilter);

  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="Alarms & Faults">
          <Box sx={{ mb: 2 }}>
            <Button
              variant={statusFilter === "All" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleStatusFilterChange("All")}
            >
              All
            </Button>
            <Button
              variant={statusFilter === "Active" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleStatusFilterChange("Active")}
            >
              Active
            </Button>
            <Button
              variant={statusFilter === "Resolved" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleStatusFilterChange("Resolved")}
            >
              Resolved
            </Button>
            <Button
              variant={statusFilter === "Acknowledged" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleStatusFilterChange("Acknowledged")}
            >
              Acknowledged
            </Button>
          </Box>

          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={filteredRows}
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
