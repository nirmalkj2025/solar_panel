import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid
} from '@mui/material';

const AddEditLocation = ({ open, handleClose, onSave, editingLocation }) => {
  const [formData, setFormData] = useState({
    locationName: '',
    latitude: '',
    longitude: '',
    address: ''
  });

  useEffect(() => {
    if (editingLocation) {
      setFormData(editingLocation);
    } else {
      setFormData({
        locationName: '',
        latitude: '',
        longitude: '',
        address: ''
      });
    }
  }, [editingLocation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{editingLocation ? 'Edit Location' : 'Add New Location'}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Location Name"
              name="locationName"
              fullWidth
              value={formData.locationName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Latitude"
              name="latitude"
              fullWidth
              value={formData.latitude}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Longitude"
              name="longitude"
              fullWidth
              value={formData.longitude}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {editingLocation ? 'Update' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditLocation;
