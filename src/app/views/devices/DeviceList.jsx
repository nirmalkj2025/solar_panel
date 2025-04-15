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
import AddEditDevice from "./AddEditDevice";

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
    Active: "success",
    Inactive: "default",
    Faulty: "error",
    Maintenance: "warning"
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

const deviceTypes = ["All", "Inverter", "Data Logger", "Communication Module", "Meter", "Battery"];

const columns = [
  { field: "type", headerName: "Device Type", width: 160 },
  { field: "name", headerName: "Device Name", flex: 1 },
  { field: "model", headerName: "Device Model", flex: 1 },
  { field: "serialNumber", headerName: "Device S/N", width: 160 },
  {
    field: "status",
    headerName: "Device Status",
    width: 140,
    renderCell: (params) => getStatusChip(params.value)
  },
  { field: "nominalPower", headerName: "Nominal Power (kW)", width: 180 },
  { field: "realTimePower", headerName: "Real-time Power (kW)", width: 180 },
  { field: "dailyYield", headerName: "Daily Yield (kWh)", width: 160 },
  { field: "plant", headerName: "Associated Plant", flex: 1 },
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
    type: "Inverter",
    name: "Huawei SUN2000",
    model: "SUN2000-50KTL",
    serialNumber: "SN12345678",
    status: "Active",
    nominalPower: 50,
    realTimePower: 47.8,
    dailyYield: 320.5,
    plant: "Green Horizon"
  },
  {
    id: 2,
    type: "Data Logger",
    name: "Sungrow Logger",
    model: "Logger1000",
    serialNumber: "SN87654321",
    status: "Active",
    nominalPower: 0.5,
    realTimePower: 0.3,
    dailyYield: 1.2,
    plant: "EcoVolt"
  },
  {
    id: 3,
    type: "Battery",
    name: "Growatt Battery",
    model: "ARK LV",
    serialNumber: "SN56781234",
    status: "Inactive",
    nominalPower: 10,
    realTimePower: 0,
    dailyYield: 0,
    plant: "Solar Alpha"
  },
  {
    id: 4,
    type: "Meter",
    name: "Schneider EM6400",
    model: "EM6400NG",
    serialNumber: "SN09876543",
    status: "Active",
    nominalPower: 1,
    realTimePower: 0.8,
    dailyYield: 5.5,
    plant: "BlueVolt"
  }
];

export default function DeviceList() {
  const [selectedType, setSelectedType] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted device:", data);
    setOpenModal(false);
  };

  const filteredRows =
    selectedType === "All" ? allRows : allRows.filter((row) => row.type === selectedType);

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
          Device List
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Filter by Type</InputLabel>
            <Select value={selectedType} onChange={handleTypeChange} label="Filter by Type">
              {deviceTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => setOpenModal(true)}
          >
            + Add Device
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

      <AddEditDevice
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
}
