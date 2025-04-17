import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';

const PlantSelector = ({ plants = [], selectedPlants, setSelectedPlants }) => {
  const handleChange = (event) => {
    const { target: { value } } = event;
    setSelectedPlants(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }} size="small">
      {/* <InputLabel id="demo-multiple-checkbox-label">Select Plant(s)</InputLabel> */}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedPlants}
        onChange={handleChange}
        input={<OutlinedInput label="Select Plant(s)" />}
        renderValue={(selected) => selected.join(', ')}
      >
        {plants.map((plant) => (
          <MenuItem key={plant.id} value={plant.name}>
            <Checkbox checked={selectedPlants.indexOf(plant.name) > -1} />
            <ListItemText primary={plant.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlantSelector;
