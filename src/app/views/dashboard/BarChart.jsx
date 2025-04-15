import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Mon", kwh: 12 },
  { name: "Tue", kwh: 18 },
  { name: "Wed", kwh: 15 },
  { name: "Thu", kwh: 20 },
  { name: "Fri", kwh: 25 },
  { name: "Sat", kwh: 22 },
  { name: "Sun", kwh: 30 }
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a40" />
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Bar dataKey="kwh" fill="#007bff" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
