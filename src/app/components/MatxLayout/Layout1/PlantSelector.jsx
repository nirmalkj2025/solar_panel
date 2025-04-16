import { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Autocomplete,
  TextField,
  Paper,
  styled
} from '@mui/material';
import { ChevronDown, Leaf } from 'lucide-react';
import { topBarHeight } from 'app/utils/constant';

const Container = styled(Paper)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  height: topBarHeight,
  borderRadius: 12,
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: 280,
  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    paddingLeft: 8,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.primary,
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.85rem',
  marginRight: 12,
}));

const PlantSelector = ({ plants = [], onSelect }) => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleChange = (_, newValue) => {
    setSelectedPlant(newValue);
    if (onSelect) onSelect(newValue);
  };

  return (
    <Container elevation={3}>
      <Leaf size={18} style={{ marginRight: 8, color: '#00ffae' }} />
      <Label>Select Plant</Label>
      <StyledAutocomplete
        options={plants}
        getOptionLabel={(option) => option.name || ''}
        value={selectedPlant}
        onChange={handleChange}
        popupIcon={<ChevronDown size={18} />}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Choose from list..."
            variant="standard"
            InputProps={{ ...params.InputProps, disableUnderline: true }}
          />
        )}
      />
    </Container>
  );
};

export default PlantSelector;
