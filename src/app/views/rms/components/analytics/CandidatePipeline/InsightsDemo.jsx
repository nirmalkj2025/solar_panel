import React, { useMemo, useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { TrendingUp, ChevronUp, ChevronDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { CardTitle, FlexWrap, GridItem, MetricCard } from "../../DashboardComponent";

dayjs.extend(isBetween);

const candidateData = [
  { name: "John", createdAt: "2025-04-03", recruiter: "R1" },
  { name: "Alice", createdAt: "2025-04-10", recruiter: "R2" },
  { name: "Tom", createdAt: "2025-04-15", recruiter: "R1" },
  { name: "Eve", createdAt: "2025-04-20", recruiter: "R1" },
  { name: "Mark", createdAt: "2025-04-28", recruiter: "R3" },
];

const dateRanges = [
  {
    label: "April 2025 (01-04-25 to 30-04-25)",
    start: "2025-04-01",
    end: "2025-04-30",
  },
  {
    label: "May 2025 (01-05-25 to 31-05-25)",
    start: "2025-05-01",
    end: "2025-05-31",
  },
];

const getWeeklyBuckets = (start, end) => {
  const weeks = [];
  let current = dayjs(start);
  const final = dayjs(end);
  while (current.isBefore(final)) {
    const weekEnd = current.add(6, "day").isAfter(final) ? final : current.add(6, "day");
    weeks.push({
      label: `${current.format("DD MMM")} - ${weekEnd.format("DD MMM")}`,
      start: current,
      end: weekEnd,
    });
    current = weekEnd.add(1, "day");
  }
  return weeks;
};

const InsightCard = ({ title, value, trend }) => (
  <div style={{
    border: "1px solid #dee2e6", borderRadius: 10, padding: 12,
    background: "#fff", flex: 1, marginRight: 10,
    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
  }}>
    <div style={{ fontSize: "0.85rem", color: "#6c757d" }}>{title}</div>
    <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
      {value}
      {trend === "up" && <span style={{ color: "green", marginLeft: 6 }}>▲</span>}
      {trend === "down" && <span style={{ color: "red", marginLeft: 6 }}>▼</span>}
    </div>
  </div>
);

const DynamicLineChart = ({ data, xAxisKey = "week", yAxisKey = "candidates", height = 260 }) => (
  <div style={{ width: "100%", height }}>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
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

const CandidatePipeline = ({ role = "admin", userRecruiter = "R1", data = candidateData, avgDaysToHire = 14 }) => {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);
  const [showInsights, setShowInsights] = useState(true);

  const filteredData = useMemo(() => {
    if (role === "admin") return data;
    if (role === "recruiter") return data.filter(d => d.recruiter === userRecruiter);
    if (role === "client") return data.filter(d => d.createdAt);
    return [];
  }, [role, data]);

  const weeklyChartData = useMemo(() => {
    const buckets = getWeeklyBuckets(selectedRange.start, selectedRange.end);
    return buckets.map(({ label, start, end }) => {
      const count = filteredData.filter((c) => {
        const date = dayjs(c.createdAt);
        return date.isBetween(start, end, null, "[]");
      }).length;
      return { week: label, candidates: count };
    });
  }, [selectedRange, filteredData]);

  const insights = [
    { title: "Hired This Month", value: 9, trend: "up" },
    { title: "Avg Days to Hire", value: avgDaysToHire, trend: "flat" },
    { title: "Candidates Sourced", value: filteredData.length, trend: "up" },
  ];

  return (
 <GridItem col={6}>
    <MetricCard>
      <FlexWrap style={{ justifyContent: "space-between" }}>
        <CardTitle>Candidate Pipeline</CardTitle>
        <TrendingUp size={20} color="#3b82f6" />
      </FlexWrap>

      <div style={{ display: "flex", marginBottom: 12 }}>
        {insights.map((insight, idx) => (
          <InsightCard key={idx} {...insight} />
        ))}
      </div>

      <select
        value={selectedRange.label}
        onChange={(e) => {
          const selected = dateRanges.find((d) => d.label === e.target.value);
          if (selected) setSelectedRange(selected);
        }}
        style={{
          padding: "6px 12px",
          borderRadius: 6,
          border: "1px solid #ccc",
          fontSize: "0.85rem",
          marginBottom: 10,
        }}
      >
        {dateRanges.map((r) => (
          <option key={r.label}>{r.label}</option>
        ))}
      </select>

      <div
        onClick={() => setShowInsights(!showInsights)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.85rem",
          color: "#3b82f6",
          fontWeight: "500",
          marginBottom: 8,
        }}
      >
        <span>Show Weekly Trends</span>
        {showInsights ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {showInsights && <DynamicLineChart data={weeklyChartData} />}
    </MetricCard>
    </GridItem>
  );
};

export default CandidatePipeline;
