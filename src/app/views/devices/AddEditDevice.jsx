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

// Dummy plant options (replace with real data)
const plantOptions = [
  { id: 1, name: "Green Horizon" },
  { id: 2, name: "EcoVolt" },
  { id: 3, name: "Solar Alpha" },
  { id: 4, name: "BlueVolt" }
];

// Dummy location options
const locationOptions = [
  "Main Rooftop",
  "East Wing",
  "South Building",
  "Battery Room",
  "Control Room"
];

const statusOptions = ["Active", "Inactive", "Faulty"];

export default function AddEditDevice({ open, onClose, onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    plantId: initialData.plantId || "",
    installationDate: initialData.installationDate || "",
    deviceStatus: initialData.deviceStatus || "Active",
    deviceLocation: initialData.deviceLocation || "",
    maintenanceFrequency: initialData.maintenanceFrequency || ""
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
      <DialogTitle>{initialData?.id ? "Edit Device" : "Add Device"}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={3} mt={1}>
          <FormControl fullWidth>
            <InputLabel>Select Plant</InputLabel>
            <Select
              value={formData.plantId}
              onChange={handleChange("plantId")}
              label="Select Plant"
            >
              {plantOptions.map((plant) => (
                <MenuItem key={plant.id} value={plant.id}>
                  {plant.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Installation Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.installationDate}
            onChange={handleChange("installationDate")}
          />

          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={formData.deviceStatus}
              onChange={handleChange("deviceStatus")}
              label="Status"
            >
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Device Location</InputLabel>
            <Select
              value={formData.deviceLocation}
              onChange={handleChange("deviceLocation")}
              label="Device Location"
            >
              {locationOptions.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Maintenance Frequency"
            value={formData.maintenanceFrequency}
            onChange={handleChange("maintenanceFrequency")}
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
