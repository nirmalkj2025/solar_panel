import React from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mockData = [
  { lat: 24.4539, lng: 54.3773, value: 90 }, // Abu Dhabi
  { lat: 25.276987, lng: 55.296249, value: 70 } // Dubai
];

const HeatMapChart = () => {
  return (
    <MapContainer center={[24.4539, 54.3773]} zoom={7} style={{ height: "300px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {mockData.map((site, idx) => (
        <CircleMarker
          key={idx}
          center={[site.lat, site.lng]}
          radius={site.value / 10}
          color="#ff5722"
          fillOpacity={0.6}
        >
          <Tooltip direction="top" offset={[0, -5]} opacity={1}>
            <span>Yield: {site.value} kWh</span>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default HeatMapChart;
