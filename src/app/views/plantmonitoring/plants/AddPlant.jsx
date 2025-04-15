import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

const plantTypes = [
  "Residential PV",
  "Residential Storage",
  "Commercial PV",
  "Commercial & Industrial ESS",
  "Microgrid"
];

const statusOptions = ["Active", "Maintenance", "Fault"];
const deviceStatuses = ["Active", "Faulty", "Inactive"];
const maintenanceFrequencies = ["Monthly", "Quarterly", "Yearly"];
const deviceLocations = ["Roof", "Ground", "Basement", "Control Room", "Remote Field"];

export default function AddPlant({ onClose }) {
  const [plantData, setPlantData] = useState({
    plantName: "",
    location: "",
    type: "",
    status: "Active",
    installedPower: "",
    remarks: ""
  });

  const [devices, setDevices] = useState([
    {
      deviceId: "",
      installationDate: null,
      deviceStatus: "Active",
      deviceLocation: "",
      maintenanceFrequency: "Monthly"
    }
  ]);

  const handlePlantChange = (e) => {
    const { name, value } = e.target;
    setPlantData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeviceChange = (index, field, value) => {
    const updatedDevices = [...devices];
    updatedDevices[index][field] = value;
    setDevices(updatedDevices);
  };

  const addDevice = () => {
    setDevices((prev) => [
      ...prev,
      {
        deviceId: "",
        installationDate: null,
        deviceStatus: "Active",
        deviceLocation: "",
        maintenanceFrequency: "Monthly"
      }
    ]);
  };

  const removeDevice = (index) => {
    const updatedDevices = [...devices];
    updatedDevices.splice(index, 1);
    setDevices(updatedDevices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...plantData,
      devices
    };

    console.log("Plant Data:", finalData);

    setPlantData({
      plantName: "",
      location: "",
      type: "",
      status: "Active",
      installedPower: "",
      remarks: ""
    });

    setDevices([
      {
        deviceId: "",
        installationDate: null,
        deviceStatus: "Active",
        deviceLocation: "",
        maintenanceFrequency: "Monthly"
      }
    ]);

    if (onClose) onClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Add Plant
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            {/* Plant Info */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Plant Name"
                name="plantName"
                value={plantData.plantName}
                onChange={handlePlantChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Location"
                name="location"
                value={plantData.location}
                onChange={handlePlantChange}
                required
              >
                {deviceLocations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Plant Type"
                name="type"
                value={plantData.type}
                onChange={handlePlantChange}
                required
              >
                {plantTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Status"
                name="status"
                value={plantData.status}
                onChange={handlePlantChange}
                required
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Installed Power (MW)"
                name="installedPower"
                type="number"
                inputProps={{ min: 0 }}
                value={plantData.installedPower}
                onChange={handlePlantChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Remarks"
                name="remarks"
                value={plantData.remarks}
                onChange={handlePlantChange}
                rows={3}
              />
            </Grid>

            {/* Devices Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1">Add Devices</Typography>
            </Grid>

            {devices.map((device, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Device ID"
                    value={device.deviceId}
                    onChange={(e) => handleDeviceChange(index, "deviceId", e.target.value)}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <DatePicker
                    label="Installation Date"
                    value={device.installationDate}
                    onChange={(newDate) => handleDeviceChange(index, "installationDate", newDate)}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    select
                    label="Device Status"
                    value={device.deviceStatus}
                    onChange={(e) => handleDeviceChange(index, "deviceStatus", e.target.value)}
                    required
                  >
                    {deviceStatuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Device Location"
                    value={device.deviceLocation}
                    onChange={(e) => handleDeviceChange(index, "deviceLocation", e.target.value)}
                    required
                  >
                    {deviceLocations.map((location) => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <TextField
                    fullWidth
                    select
                    label="Maintenance Frequency"
                    value={device.maintenanceFrequency}
                    onChange={(e) =>
                      handleDeviceChange(index, "maintenanceFrequency", e.target.value)
                    }
                  >
                    {maintenanceFrequencies.map((freq) => (
                      <MenuItem key={freq} value={freq}>
                        {freq}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={2} sm={2}>
                  <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                    <IconButton onClick={() => removeDevice(index)} disabled={devices.length === 1}>
                      <RemoveCircle color="error" />
                    </IconButton>
                  </Box>
                </Grid>
              </React.Fragment>
            ))}

            <Grid item xs={12}>
              <Button variant="outlined" onClick={addDevice} startIcon={<AddCircle />}>
                Add Another Device
              </Button>
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Box textAlign="right">
                <Button type="submit" variant="contained" color="primary">
                  Add Plant
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
}
