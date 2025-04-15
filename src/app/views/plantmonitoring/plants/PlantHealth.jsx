import React from "react";
import { Grid, Paper, Typography, Box, LinearProgress, Chip } from "@mui/material";
import { green, red, orange, grey } from "@mui/material/colors";
import HealingIcon from "@mui/icons-material/Healing";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const plantHealthData = [
  {
    name: "Plant A",
    status: "Healthy",
    progress: 98,
    color: green[500],
    icon: <HealingIcon />
  },
  {
    name: "Plant B",
    status: "Warning",
    progress: 74,
    color: orange[500],
    icon: <WarningAmberIcon />
  },
  {
    name: "Plant C",
    status: "Critical",
    progress: 39,
    color: red[500],
    icon: <ReportProblemIcon />
  },
  {
    name: "Plant D",
    status: "Offline",
    progress: 0,
    color: grey[600],
    icon: <ReportProblemIcon />
  }
];

export default function PlantHealth() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Plant Health Status
      </Typography>
      <Grid container spacing={3}>
        {plantHealthData.map((plant, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  {plant.icon}
                  <Typography variant="subtitle1">{plant.name}</Typography>
                </Box>
                <Chip
                  label={plant.status}
                  size="small"
                  sx={{
                    backgroundColor: plant.color,
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                />
              </Box>
              <Box mt={2}>
                <LinearProgress
                  variant="determinate"
                  value={plant.progress}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    [`& .MuiLinearProgress-bar`]: {
                      backgroundColor: plant.color
                    }
                  }}
                />
                <Box mt={1}>
                  <Typography variant="body2" color="textSecondary">
                    {plant.progress}% operational
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
