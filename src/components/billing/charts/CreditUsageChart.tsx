import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface CreditUsageChartProps {
  used: number;
  remaining: number;
}

const COLORS = ['#9333ea', '#7c3aed'];

export default function CreditUsageChart({ used, remaining }: CreditUsageChartProps) {
  const data = [
    { name: 'Used', value: used },
    { name: 'Remaining', value: remaining },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          animationDuration={500}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
