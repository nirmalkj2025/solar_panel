// pages/Locations.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  IconButton
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddEditLocation from "./AddEditLocation";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const initialLocations = [
  {
    id: 1,
    locationName: "Solar Farm A",
    region: "California",
    latitude: "36.7783",
    longitude: "-119.4179",
    address: "789 Sunlight Blvd, Fresno, CA",
  },
  {
    id: 2,
    locationName: "Green Valley Plant",
    region: "Nevada",
    latitude: "38.8026",
    longitude: "-116.4194",
    address: "456 Renewable Way, Reno, NV",
  },
];

const Locations = () => {
  const [locations, setLocations] = useState(initialLocations);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAddEdit = (data) => {
    if (data.id) {
      setLocations((prev) =>
        prev.map((l) => (l.id === data.id ? { ...l, ...data } : l))
      );
    } else {
      const newLocation = { ...data, id: Date.now() };
      setLocations((prev) => [...prev, newLocation]);
    }
  };

  const handleEdit = (location) => {
    setEditData(location);
    setModalOpen(true);
  };

  const columns = [
    { field: "locationName", headerName: "Location Name", flex: 1 },
    { field: "region", headerName: "Region", flex: 1 },
    { field: "latitude", headerName: "Latitude", flex: 0.8 },
    { field: "longitude", headerName: "Longitude", flex: 0.8 },
    { field: "address", headerName: "Address", flex: 1.5 },
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        flex: 1,
        renderCell: (params) => (
          <Stack direction="row" spacing={1}>
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleEdit(params.row)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      }
  ];

  return (
    <Box p={2}>
      <Card>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">Locations</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setEditData(null);
                setModalOpen(true);
              }}
            >
              Add Location
            </Button>
          </Stack>
          <DataGrid
            rows={locations}
            columns={columns}
            autoHeight
            disableSelectionOnClick
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
          />
        </CardContent>
      </Card>

      <AddEditLocation
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleSave={handleAddEdit}
        initialData={editData}
      />
    </Box>
  );
};

export default Locations;