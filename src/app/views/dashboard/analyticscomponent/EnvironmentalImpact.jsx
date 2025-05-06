import React from 'react';
import { Grid, Box, Typography, Divider, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Card Component
const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
}));

// Styled Row Component
const StatRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const EnvironmentalImpact = () => {
  // Initial state data (can be replaced with props or Redux later)
  const data = {
    todayCO2: 1927.38,      // kg
    monthCO2: 26.38,        // tons
    totalCO2: 486.73        // tons
  };

  return (
    <Grid item xs={12} md={5}>
      <StatCard elevation={3}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Environmental Impact
        </Typography>
        <StatRow>
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="caption" color="textSecondary">
              CO₂ Saved Today (kg)
            </Typography>
            <Typography variant="h6">{data.todayCO2.toLocaleString()}</Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="caption" color="textSecondary">
              CO₂ Saved This Month (tons)
            </Typography>
            <Typography variant="h6">{data.monthCO2.toLocaleString()}</Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="caption" color="textSecondary">
              Total CO₂ Saved (tons)
            </Typography>
            <Typography variant="h6">{data.totalCO2.toLocaleString()}</Typography>
          </Box>
        </StatRow>
      </StatCard>
    </Grid>
  );
};

export default EnvironmentalImpact;
