import React, { useState } from "react";
import { Box, Grid, Button, Typography, Paper, Modal, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const PlantsTypeMaster = () => {
  const [plantTypes, setPlantTypes] = useState([
    {
      id: 1,
      name: "Residential",
      description: "Small rooftop solar systems for homes",
      createdAt: "2024-02-12"
    },
    {
      id: 2,
      name: "Commercial",
      description: "Medium scale solar systems for businesses",
      createdAt: "2024-03-20"
    },
    {
      id: 3,
      name: "Industrial",
      description: "Large-scale solar systems for factories",
      createdAt: "2024-04-01"
    }
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [newPlantType, setNewPlantType] = useState({
    name: "",
    description: ""
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlantType({ ...newPlantType, [name]: value });
  };

  const handleAddPlantType = () => {
    const newType = {
      id: plantTypes.length + 1,
      name: newPlantType.name,
      description: newPlantType.description,
      createdAt: new Date().toLocaleDateString()
    };
    setPlantTypes([...plantTypes, newType]);
    setNewPlantType({ name: "", description: "" });
    handleCloseModal();
  };

  const columns = [
    { field: "id", headerName: "SR No", width: 100 },
    { field: "name", headerName: "Plant Type Name", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "createdAt", headerName: "Created At", width: 180 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <>
          <IconButton color="primary" sx={{ marginRight: 1 }}>
            <EditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
  ];

  return (
    <Box p={3}>
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={600}>
          Plant Type Master
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: "#005fff", borderRadius: "8px" }}
          onClick={handleOpenModal}
        >
          Add Type
        </Button>
      </Grid>

      <Paper elevation={3}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={plantTypes}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Paper>

      {/* Add Plant Type Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Add Plant Type</Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Grid>

          <TextField
            fullWidth
            label="Plant Type Name"
            name="name"
            value={newPlantType.name}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={newPlantType.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#005fff", borderRadius: "8px" }}
              onClick={handleAddPlantType}
            >
              Add Type
            </Button>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default PlantsTypeMaster;
