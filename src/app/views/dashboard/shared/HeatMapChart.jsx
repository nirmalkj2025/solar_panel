// src/shared/HeatMap.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Box } from "@mui/material";

const data = [
  { day: "Mon", hour1: 200, hour2: 180, hour3: 250, hour4: 270, hour5: 290, hour6: 320 },
  { day: "Tue", hour1: 150, hour2: 200, hour3: 240, hour4: 230, hour5: 300, hour6: 310 },
  { day: "Wed", hour1: 220, hour2: 210, hour3: 250, hour4: 270, hour5: 310, hour6: 350 }
];

const CustomHeatMap = () => {
  // You can customize this based on your data to apply a color gradient
  const getColor = (value) => {
    if (value > 300) return "#ff7300"; // high values
    if (value > 200) return "#00C49F"; // medium values
    return "#8884d8"; // low values
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="hour1">
          {data.map((entry, index) => (
            <Cell key={`cell-1-${index}`} fill={getColor(entry.hour1)} />
          ))}
        </Bar>
        <Bar dataKey="hour2">
          {data.map((entry, index) => (
            <Cell key={`cell-2-${index}`} fill={getColor(entry.hour2)} />
          ))}
        </Bar>
        <Bar dataKey="hour3">
          {data.map((entry, index) => (
            <Cell key={`cell-3-${index}`} fill={getColor(entry.hour3)} />
          ))}
        </Bar>
        <Bar dataKey="hour4">
          {data.map((entry, index) => (
            <Cell key={`cell-4-${index}`} fill={getColor(entry.hour4)} />
          ))}
        </Bar>
        <Bar dataKey="hour5">
          {data.map((entry, index) => (
            <Cell key={`cell-5-${index}`} fill={getColor(entry.hour5)} />
          ))}
        </Bar>
        <Bar dataKey="hour6">
          {data.map((entry, index) => (
            <Cell key={`cell-6-${index}`} fill={getColor(entry.hour6)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomHeatMap;
