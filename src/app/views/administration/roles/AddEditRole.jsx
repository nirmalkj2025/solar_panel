import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack
} from "@mui/material";

// Dummy role options (replace with real data)
const roleOptions = ["Admin", "Client", "Operator"];

// Dummy status options
const statusOptions = ["Active", "Inactive"];

export default function AddEditRole({ open, onClose, onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    roleName: initialData.roleName || "",
    status: initialData.status || "Active",
    description: initialData.description || "",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFormSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialData?.id ? "Edit Role" : "Add Role"}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={3} mt={1}>
          <TextField
            fullWidth
            label="Role Name"
            value={formData.roleName}
            onChange={handleChange("roleName")}
          />

          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={formData.status}
              onChange={handleChange("status")}
              label="Status"
            >
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Description"
            value={formData.description}
            onChange={handleChange("description")}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} variant="contained" color="primary">
          {initialData?.id ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
