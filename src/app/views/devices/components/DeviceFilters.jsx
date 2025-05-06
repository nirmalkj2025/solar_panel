
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
export default function DeviceFilters({
  plants, deviceModels,
  onSearch,
}) {
  const [plant, setPlant] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [deviceModel, setDeviceModel] = useState('');

  const handleSearch = () => {
    onSearch({ plant, deviceName, deviceModel });
  };

  return (
    <Box sx={{ px: 3, py: 2, bgcolor: '#fafafa', borderBottom: 1, borderColor: 'divider' }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth size="small">
          <InputLabel>Plant</InputLabel>
          <Select
            value={plant}
            onChange={(e) => setPlant(e.target.value)}
            label="Plant"
          >
            <MenuItem value=""><em>All</em></MenuItem>
            {plants.map((p) => (
              <MenuItem key={p} value={p}>{p}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Device Name / Serial Number"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          fullWidth
          size="small"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth size="small">
          <InputLabel>Device Model</InputLabel>
          <Select
            value={deviceModel}
            onChange={(e) => setDeviceModel(e.target.value)}
            label="Device Model"
          >
            <MenuItem value=""><em>All</em></MenuItem>
            {deviceModels.map((model) => (
              <MenuItem key={model} value={model}>{model}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSearch}
          fullWidth
          size="medium"
          startIcon={<SearchIcon />}
          sx={{ height: '40px' }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  </Box>
  );
}
