import { useMemo, useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import DynamicLineChart from "./Chart";
import Filters from "./Filters";
import Insights from "./Insights";
import { CardTitle, FlexWrap, GridItem, MetricCard } from "../../DashboardComponent";
import { TrendingUp } from "lucide-react";
dayjs.extend(isBetween);

const sampleData = [
  { name: "John", createdAt: "2025-04-03" },
  { name: "Alice", createdAt: "2025-04-10" },
  { name: "Tom", createdAt: "2025-04-15" },
  { name: "Eve", createdAt: "2025-04-20" },
  { name: "Mark", createdAt: "2025-04-28" },
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

const CandidatePipeline = ({ data = sampleData, avgDaysToHire = 14 }) => {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);

  const weeklyChartData = useMemo(() => {
    const buckets = getWeeklyBuckets(selectedRange.start, selectedRange.end);
    return buckets.map(({ label, start, end }) => {
      const count = data.filter((c) => dayjs(c.createdAt).isBetween(start, end, null, "[]")).length;
      return { week: label, candidates: count };
    });
  }, [selectedRange, data]);

  const stages = [
    { label: "Applied", value: 142 },
    { label: "Interviewing", value: 68 },
    { label: "Offered", value: 22 },
    { label: "Hired", value: 9 },
  ];

  return (
    <GridItem col={6}>
    <MetricCard>
      <FlexWrap style={{ justifyContent: "space-between" }}>
        <CardTitle>Candidate Pipeline</CardTitle>
        <TrendingUp size={20} color="#3b82f6" />
      </FlexWrap>

      <Insights stages={stages} />

      <div style={{ fontSize: "0.85rem", color: "#555", marginBottom: 4 }}>
        Avg. Days from Applied → Hired: <strong>{avgDaysToHire} days</strong>
      </div>

      <Filters dateRanges={dateRanges} selected={selectedRange} onChange={setSelectedRange} />

      <DynamicLineChart data={weeklyChartData} />
    </MetricCard>
    </GridItem>
  );
};

export default CandidatePipeline;
