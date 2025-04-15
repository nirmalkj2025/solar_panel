// src/shared/BarChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Inverter 1", performance: 400 },
  { name: "Inverter 2", performance: 350 },
  { name: "Inverter 3", performance: 300 },
  { name: "Inverter 4", performance: 500 }
  // Add more data as needed
];

const CustomBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="performance" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default CustomBarChart;
