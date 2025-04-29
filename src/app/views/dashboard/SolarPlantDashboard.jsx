// File: SolarPlantDashboard.jsx

import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

// React Flow Nodes and Edges
const nodes = [
  { id: "1", type: "input", data: { label: "Solar\n(13 W/m² | 14.75 kW)" }, position: { x: 100, y: 100 }, style: { backgroundColor: "#4CAF50", color: "#fff", padding: 10 } },
  { id: "2", data: { label: "Inverter\n(14.53 kW)" }, position: { x: 300, y: 100 }, style: { backgroundColor: "#2196F3", color: "#fff", padding: 10 } },
  { id: "3", data: { label: "SMB\n(14.39 kW)" }, position: { x: 500, y: 100 }, style: { backgroundColor: "#00BCD4", color: "#fff", padding: 10 } },
  { id: "4", data: { label: "Grid Import\n(570.70 kW)" }, position: { x: 700, y: 50 }, style: { backgroundColor: "#FFC107", color: "#000", padding: 10 } },
  { id: "5", data: { label: "Load\n(585.09 kW)" }, position: { x: 900, y: 100 }, style: { backgroundColor: "#FF5722", color: "#fff", padding: 10 } },
  { id: "6", data: { label: "DG (Diesel Generator)\n(OFF)" }, position: { x: 700, y: 200 }, style: { backgroundColor: "#9E9E9E", color: "#fff", padding: 10 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e6-5", source: "6", target: "5", animated: true },
];

// Plant Summary Data
const plantSummaryData = [
  { category: "Plant Capacity", data: "DC: 900.40 kWp, AC: 770.00 kW" },
  { category: "Plant Power", data: "DC: 14.79 kW, AC: 14.39 kW" },
  { category: "Inverter Power", data: "DC: 14.79 kW, AC: 14.53 kW" },
  { category: "Performance", data: "PR: 70.74%, CUF: 19.58%" },
  { category: "Generation", data: "Day Gen: 3,617.75 kWh, Total Gen: 863,469.31 kWh" },
  { category: "Sensor (Irradiance & Temperature)", data: "IRR: 13 W/m², INS: 5.68 kWh/m²/day, Ambient Temp: 33.60°C, Module Temp: 33.40°C" },
  { category: "Grid Interaction", data: "Import: 2991.70 MWh, Export: 0.00, Grid Power: 570.70 kW" },
  { category: "DG (Diesel Generator)", data: "OFF" },
];

const SolarPlantDashboard = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#f5f5f5" }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Solar Plant Dashboard</Typography>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth="xl" style={{ marginTop: 20 }}>
        
        {/* 1. Header Section */}
        <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
          <Typography variant="h5" gutterBottom>Overall Plant Summary</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography><strong>Last Log Time:</strong> 28/02/2025, 17:40</Typography>
              <Typography><strong>Solar Power:</strong> 14.39 kW</Typography>
              <Typography><strong>Day Generation:</strong> 3,617.75 kWh</Typography>
              <Typography><strong>Yesterday Gen:</strong> 3,934.13 kWh</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography><strong>Month Gen:</strong> 72,702.00 kWh</Typography>
              <Typography><strong>CUF:</strong> 19.58%</Typography>
              <Typography><strong>Total Gen:</strong> 863,469.31 kWh</Typography>
              <Typography><strong>Earning:</strong> 3.45 Million VND (~₹12,000)</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography><strong>Notes:</strong></Typography>
              <Typography>- CUF is low (~20%), ideal: 30-40%</Typography>
              <Typography>- PR: 70.74% (acceptable)</Typography>
              <Typography>- IRR: 13 W/m² (low, evening time)</Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* 2. Tabular Plant Summary */}
        <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
          <Typography variant="h5" gutterBottom>Plant Summary</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Category</strong></TableCell>
                  <TableCell><strong>Data</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {plantSummaryData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.data}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* 3. Block Diagram */}
        <Paper elevation={3} style={{ padding: 20, height: "600px" }}>
          <Typography variant="h5" gutterBottom>Solar Plant Block Diagram</Typography>
          <div style={{ height: "500px" }}>
            <ReactFlow nodes={nodes} edges={edges} fitView attributionPosition="bottom-left">
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </Paper>

      </Container>
    </div>
  );
};

export default SolarPlantDashboard;
