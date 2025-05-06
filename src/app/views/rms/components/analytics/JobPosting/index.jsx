import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { Eye, BarChart2, FileText, TrendingUp } from "lucide-react";
import { CardTitle, GridItem, MetricCard } from "../../DashboardComponent";

const _initialData = {
  totalViews: 12450,
  avgViewsPerJob: 830,
  avgApplicationsPerJob: 45,
  applicationsChartData: [
    { jobTitle: "Frontend Developer", applications: 65 },
    { jobTitle: "Backend Engineer", applications: 52 },
    { jobTitle: "Project Manager", applications: 38 },
    { jobTitle: "QA Tester", applications: 24 }
  ],
  topSources: [
    { source: "LinkedIn", count: 120 },
    { source: "Indeed", count: 95 },
    { source: "Employee Referral", count: 78 },
    { source: "Social Media", count: 56 },
    { source: "Website", count: 34 }
  ]
};

const formatNumber = (value) => new Intl.NumberFormat().format(value);

export const JobPostingEngagement = () => {
  const {
    totalViews,
    avgViewsPerJob,
    avgApplicationsPerJob,
    applicationsChartData,
    topSources
  } = _initialData;

  return (
    <GridItem col={6}>
      <MetricCard>
        {/* Section Header */}
        <CardTitle style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          Job Posting Engagement
        </CardTitle>
        <p style={{ color: "#6c757d", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          Analyze your job posts’ visibility, interest, and application rates to optimize hiring.
        </p>

        {/* KPI Metrics */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.5rem",
            backgroundColor: "#f8f9fa",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "2rem"
          }}
        >
          <MetricBox
            icon={<Eye size={18} color="#339af0" />}
            label="Total Views"
            value={formatNumber(totalViews)}
          />
          <MetricBox
            icon={<BarChart2 size={18} color="#845ef7" />}
            label="Avg. Views per Job"
            value={formatNumber(avgViewsPerJob)}
          />
          <MetricBox
            icon={<FileText size={18} color="#22b8cf" />}
            label="Applications per Role"
            value={formatNumber(avgApplicationsPerJob)}
          />
        </div>

        {/* Applications Chart */}
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Application Distribution by Role
          </h4>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={applicationsChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
            >
              <XAxis
                dataKey="jobTitle"
                stroke="#495057"
                angle={-20}
                textAnchor="end"
                height={60}
              />
              <YAxis stroke="#adb5bd" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderColor: "#dee2e6",
                  borderRadius: 8
                }}
              />
              <Legend />
              <Bar
                dataKey="applications"
                fill="#4dabf7"
                radius={[6, 6, 0, 0]}
                animationDuration={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Sources List */}
        {/* {topSources?.length > 0 && (
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Top Applicant Sources
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              {topSources.slice(0, 5).map((src, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "0.9rem",
                    color: "#495057",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <TrendingUp size={14} style={{ marginRight: 6 }} />
                  <strong>{src.source}</strong>: {formatNumber(src.count)} applicants
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </MetricCard>
    </GridItem>
  );
};

const MetricBox = ({ icon, label, value }) => (
  <div style={{ flex: 1 }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6c757d" }}>
      {icon}
      <span style={{ fontSize: "0.85rem" }}>{label}</span>
    </div>
    <div style={{ fontWeight: 700, fontSize: "1.3rem", marginTop: "0.25rem" }}>{value}</div>
  </div>
);
