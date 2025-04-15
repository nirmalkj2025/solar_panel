import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  backgroundColor: "#ffffff",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f8fafc",
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#1e293b"
  },
  "& .MuiDataGrid-cell": {
    color: "#334155"
  }
}));

const getStatusChip = (status) => {
  const colorMap = {
    Pending: "warning",
    Resolved: "success"
  };
  return (
    <Chip
      label={status}
      color={colorMap[status] || "default"}
      size="small"
      sx={{ fontWeight: 500 }}
    />
  );
};

const faultStatuses = ["All", "Pending", "Resolved"];

const columns = [
  { field: "alarmName", headerName: "Alarm Name", flex: 1 },
  { field: "alarmType", headerName: "Alarm Type", flex: 1 },
  { field: "faultCode", headerName: "Fault Code", width: 160 },
  { field: "plantName", headerName: "Plant Name", flex: 1 },
  { field: "deviceName", headerName: "Device Name", flex: 1 },
  { field: "deviceModel", headerName: "Device Model", flex: 1 },
  { field: "occurrenceTime", headerName: "Occurrence Time", width: 180 },
  {
    field: "status",
    headerName: "Fault Status",
    width: 140,
    renderCell: (params) => getStatusChip(params.value)
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    sortable: false,
    filterable: false,
    renderCell: () => (
      <Button size="small" variant="outlined" color="primary">
        View
      </Button>
    )
  }
];

const allRows = [
  {
    id: 1,
    alarmName: "Inverter Overload",
    alarmType: "Critical",
    faultCode: "FAULT-101",
    plantName: "Green Horizon",
    deviceName: "Huawei SUN2000",
    deviceModel: "SUN2000-50KTL",
    occurrenceTime: "2025-04-14 08:45",
    status: "Pending"
  },
  {
    id: 2,
    alarmName: "Low Battery",
    alarmType: "Warning",
    faultCode: "FAULT-102",
    plantName: "EcoVolt",
    deviceName: "Growatt Battery",
    deviceModel: "ARK LV",
    occurrenceTime: "2025-04-13 18:30",
    status: "Resolved"
  },
  {
    id: 3,
    alarmName: "Communication Loss",
    alarmType: "Major",
    faultCode: "FAULT-103",
    plantName: "Solar Alpha",
    deviceName: "Sungrow Logger",
    deviceModel: "Logger1000",
    occurrenceTime: "2025-04-12 14:20",
    status: "Pending"
  }
];

export default function FaultList() {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const filteredRows =
    selectedStatus === "All" ? allRows : allRows.filter((row) => row.status === selectedStatus);

  return (
    <Box px={2} py={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={3}
        spacing={2}
        flexWrap="wrap"
      >
        <Typography variant="h5" fontWeight={600} color="primary">
          Fault List
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Filter by Status</InputLabel>
            <Select value={selectedStatus} onChange={handleStatusChange} label="Filter by Status">
              {faultStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" size="medium">
            + Add Fault
          </Button>
        </Stack>
      </Stack>

      <Container>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          disableSelectionOnClick
        />
      </Container>
    </Box>
  );
}
