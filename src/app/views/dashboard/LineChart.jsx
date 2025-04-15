import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 700 },
  { name: "Mar", uv: 600 },
  { name: "Apr", uv: 900 },
  { name: "May", uv: 800 }
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#00ffe0"
          strokeWidth={3}
          dot={{ r: 5, stroke: "#00ffe0", fill: "#1e1e2f" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
