import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  Tooltip
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddEditClient from "./AddEditClient";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useEditClient from "./hooks/useEditClient";
import { useSelector } from "react-redux";
const initialClients = [
  {
    id: 1,
    clientName: "SunPower Inc.",
    contactPerson: "Alice Smith",
    email: "alice@sunpower.com",
    phone: "+1-234-567-8901",
    address: "123 Solar Ave, California, USA",
  },
  {
    id: 2,
    clientName: "GreenTech Ltd.",
    contactPerson: "Bob Johnson",
    email: "bob@greentech.com",
    phone: "+44-789-456-1230",
    address: "45 Windmill Rd, London, UK",
  },
];

const Clients = () => {
const [modalOpen, setModalOpen] = useState(false);
const [selectedId, setSelectedId] = useState(null);
const clients = useSelector((state) => state.client.clients);
const { client} = useEditClient({id: selectedId});

  const columns = [
    { field: "name", headerName: "Client Name", flex: 1 },
    { field: "contactPerson", headerName: "Contact Person", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.2 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "address", headerName: "Address", flex: 1.5 },
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        flex: 1,
        renderCell: (params) => (
            <Stack direction="row" spacing={1}>
              {/* Edit Button */}
              <Tooltip title="Edit" placement="top">
                <IconButton
                  color="primary"
                  size="small"
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#e3f2fd", // Light primary background
                    '&:hover': {
                      backgroundColor: "#90caf9", // Light blue on hover
                      boxShadow: "0px 4px 6px rgba(33, 150, 243, 0.4)", // Soft glow effect
                    },
                  }}
                  onClick={() => setSelectedId(params.row?._id)}
                >
                  <EditIcon fontSize="small" sx={{ color: "#1976d2" }} /> {/* Primary blue color */}
                </IconButton>
              </Tooltip>
          
              {/* Delete Button */}
              <Tooltip title="Delete" placement="top">
                <IconButton
                  color="error"
                  size="small"
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#ffebee", // Light red background
                    '&:hover': {
                      backgroundColor: "#ef9a9a", // Light red on hover
                      boxShadow: "0px 4px 6px rgba(244, 67, 54, 0.4)", // Soft glow effect
                    },
                  }}
                  onClick={() => handleDelete(params.row.id)}
                >
                  <DeleteIcon fontSize="small" sx={{ color: "#f44336" }} /> {/* Red icon color */}
                </IconButton>
              </Tooltip>
            </Stack>
          )
      }
  ];
const onSave = (message) => {
  setSelectedId(null);
  setModalOpen(false); 
  alert(message);
}
useEffect(() => {
 if(selectedId) {
    setModalOpen(true);
  }
}, [selectedId])
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
            <Typography variant="h6">Clients</Typography>
            <Button
              variant="contained"
              onClick={() => {
                // setEditData(null);
                setModalOpen(true);
              }}
            >
              Add Client
            </Button>
          </Stack>
          <DataGrid
            rows={clients}
            columns={columns}
            getRowId={(row) => row._id}
            autoHeight
            disableSelectionOnClick
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
          />
        </CardContent>
      </Card>

      <AddEditClient
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        // handleSave={handleAddEdit}
        onSave={onSave}
        initialData={client}
      />
    </Box>
  );
};

export default Clients;
