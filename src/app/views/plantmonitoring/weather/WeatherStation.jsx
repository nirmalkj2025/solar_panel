import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import { SimpleCard } from "app/components";

const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

// Dummy data for Weather Station
const rows = [
  {
    id: 1,
    stationID: "WS-001",
    temperature: "28°C",
    solarRadiation: "600 W/m²",
    humidity: "55%",
    windSpeed: "5 m/s",
    pressure: "1015 hPa",
    lastUpdate: "2024-03-20"
  },
  {
    id: 2,
    stationID: "WS-002",
    temperature: "32°C",
    solarRadiation: "750 W/m²",
    humidity: "60%",
    windSpeed: "3 m/s",
    pressure: "1013 hPa",
    lastUpdate: "2024-03-19"
  },
  {
    id: 3,
    stationID: "WS-003",
    temperature: "30°C",
    solarRadiation: "650 W/m²",
    humidity: "50%",
    windSpeed: "7 m/s",
    pressure: "1012 hPa",
    lastUpdate: "2024-03-18"
  },
  {
    id: 4,
    stationID: "WS-004",
    temperature: "25°C",
    solarRadiation: "400 W/m²",
    humidity: "70%",
    windSpeed: "4 m/s",
    pressure: "1016 hPa",
    lastUpdate: "2024-03-17"
  },
  {
    id: 5,
    stationID: "WS-005",
    temperature: "35°C",
    solarRadiation: "800 W/m²",
    humidity: "45%",
    windSpeed: "6 m/s",
    pressure: "1014 hPa",
    lastUpdate: "2024-03-16"
  }
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "stationID", headerName: "Station ID", width: 150 },
  { field: "temperature", headerName: "Temperature (°C)", width: 180 },
  { field: "solarRadiation", headerName: "Solar Radiation (W/m²)", width: 220 },
  { field: "humidity", headerName: "Humidity (%)", width: 160 },
  { field: "windSpeed", headerName: "Wind Speed (m/s)", width: 180 },
  { field: "pressure", headerName: "Pressure (hPa)", width: 180 },
  { field: "lastUpdate", headerName: "Last Update", width: 180 }
];

export default function WeatherStation() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard title="Weather Station Data">
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </SimpleCard>
      </Stack>
    </Container>
  );
}
