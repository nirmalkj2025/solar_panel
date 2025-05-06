import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const DynamicLineChart = ({
  data,
  xAxisKey = "week",
  yAxisKey = "candidates",
  height = 180,
  showGrid = true,
}) => (
  <div style={{ width: "100%", height }}>
    <ResponsiveContainer>
      <LineChart data={data}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={yAxisKey}
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default DynamicLineChart;
