import React from 'react';
import { Chip } from '@mui/material';

const BadgeChip = ({ label, color, ...props }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: color,
        color: 'white',
        fontWeight: 'bold',
      }}
      {...props}
    />
  );
};

export default BadgeChip;
