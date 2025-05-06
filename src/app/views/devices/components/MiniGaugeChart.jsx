import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const MiniGaugeChart = ({ value, maxValue, name }) => {
  const data = [
    {
      name: name,
      value: value,
      fill: value > 80 ? '#4caf50' : value > 50 ? '#ffeb3b' : '#f44336',
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={100}>
      <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="80%" barSize={10} data={data}>
        <RadialBar minAngle={15} clockWise={true} dataKey="value" />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: 0, left: 10 }} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default MiniGaugeChart;
