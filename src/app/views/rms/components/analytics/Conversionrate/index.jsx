import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { Percent } from "lucide-react";
import { CardTitle, GridItem, MetricCard } from "../../DashboardComponent";

// Example _initialData
const _initialData = {
  conversionMetrics: [
    { jobTitle: "Frontend Developer", views: 1000, applications: 120 },
    { jobTitle: "Backend Engineer", views: 900, applications: 72 },
    { jobTitle: "Project Manager", views: 800, applications: 40 },
    { jobTitle: "QA Tester", views: 600, applications: 30 }
  ]
};

const formatPercent = (value) => `${value.toFixed(1)}%`;

export const ConversionRate = () => {
  const dataWithConversion = _initialData.conversionMetrics.map((item) => ({
    ...item,
    conversionRate: (item.applications / item.views) * 100
  }));

  const averageConversionRate =
    dataWithConversion.reduce((sum, item) => sum + item.conversionRate, 0) /
    dataWithConversion.length;

  return (
    <GridItem col={6}>
      <MetricCard>
        <CardTitle style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          Conversion Rate
        </CardTitle>
        <p style={{ color: "#6c757d", fontSize: "0.9rem", marginBottom: "1rem" }}>
          Measure how effectively job views convert into applications.
        </p>

        {/* Highlight Metric */}
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "1.25rem",
            fontWeight: 700
          }}
        >
          <Percent size={20} color="#228be6" />
          Avg. Conversion Rate: {formatPercent(averageConversionRate)}
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={dataWithConversion} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
            <XAxis dataKey="jobTitle" stroke="#495057" angle={-20} textAnchor="end" height={60} />
            <YAxis stroke="#adb5bd" tickFormatter={(v) => `${v}%`} />
            <Tooltip
              formatter={(val) => formatPercent(val)}
              labelFormatter={(label) => `Role: ${label}`}
              contentStyle={{
                backgroundColor: "#ffffff",
                borderColor: "#dee2e6",
                borderRadius: 8
              }}
            />
            <Bar
              dataKey="conversionRate"
              fill="#339af0"
              radius={[6, 6, 0, 0]}
              animationDuration={600}
            />
          </BarChart>
        </ResponsiveContainer>
      </MetricCard>
    </GridItem>
  );
};

