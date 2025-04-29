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
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import AddEditRole from "./AddEditRole"; // New component for adding/editing roles

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  backgroundColor: "#ffffff",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f8fafc",
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#1e293b",
  },
  "& .MuiDataGrid-cell": {
    color: "#334155",
  },
}));

const columns = [
  { field: "name", headerName: "Role Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    renderCell: (params) => (
      <Chip label={params.value} color={params.value === "Active" ? "success" : "default"} />
    ),
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    sortable: false,
    filterable: false,
    renderCell: () => (
      <Button size="small" variant="outlined" color="primary">
        Edit
      </Button>
    ),
  },
];

const allRoles = [
  {
    id: 1,
    name: "Admin",
    description: "Full access to all settings",
    status: "Active",
  },
  {
    id: 2,
    name: "Operator",
    description: "Can monitor system data",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Client",
    description: "Can view plant data",
    status: "Active",
  },
];

export default function RoleList() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const filteredRoles =
    selectedStatus === "All"
      ? allRoles
      : allRoles.filter((role) => role.status === selectedStatus);

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
          Role List
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Filter by Status</InputLabel>
            <Select
              value={selectedStatus}
              onChange={handleStatusChange}
              label="Filter by Status"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => setOpenModal(true)}
          >
            + Add Role
          </Button>
        </Stack>
      </Stack>

      <Container>
        <DataGrid
          rows={filteredRoles}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          disableSelectionOnClick
        />
      </Container>

      <AddEditRole
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={(data) => console.log("Submitted role:", data)}
      />
    </Box>
  );
}
