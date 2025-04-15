// src/shared/LineChart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Day 1", production: 400, consumption: 240 },
  { name: "Day 2", production: 300, consumption: 260 },
  { name: "Day 3", production: 500, consumption: 300 },
  { name: "Day 4", production: 700, consumption: 400 }
  // Add more data as needed
];

const CustomLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="production" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="consumption" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default CustomLineChart;
