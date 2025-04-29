import React, { useState } from "react";
import {
  CenteredText,
  ChartContainer,
  InfoGrid,
  InfoItem,
  MetricCard,
  CardTitle,
  Section,
  FlexWrap,
  InfoBlock,
  CardRows,
  Grid,
  GridItem,
  LegendBox,
  LegendItem,
  ColorDot,
  InfoNote,
  SubText,
  MetricValue,
  StepInsight,
  Stage,
  DropRate,
  InfoSection,
  ChartSection
} from "./components/DashboardComponent";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart
} from "recharts";
import { Eye, BarChart2 } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, BarChart, CartesianGrid } from "recharts";
import { AreaChart, Area } from "recharts";
import { ArrowRight, FileTextIcon } from "lucide-react";
import { Briefcase, FileText, CalendarClock, UserCheck } from "lucide-react";
import { LineChart as LineIcon, Clock4, Users, TrendingUp } from "lucide-react";
// import { ArrowRight } from "react-feather";
import { Legend } from "recharts";
import { Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@mui/material";
const predictiveData = {
  forecastVsActual: [
    { month: "Jan", forecast: 30, actual: 27 },
    { month: "Feb", forecast: 32, actual: 34 },
    { month: "Mar", forecast: 28, actual: 29 },
    { month: "Apr", forecast: 35, actual: 31 }
  ],
  attritionRate: 12.4,
  pipelineSufficiency: 73,
  timeToFillPrediction: 21.3
};
const DIVERSITY_COLORS = ["#5e60ce", "#5390d9", "#4ea8de", "#56cfe1"];
const JOB_ENGAGEMENT_COLORS = ["#60a5fa", "#34d399", "#fbbf24"];
const COST_EFFICIENCY_COLORS = ["#3b82f6", "#f97316", "#10b981"];
const diversityMetrics = {
  applicantDiversityRatio: 68,
  diversityInHires: 45,
  panelDiversityScore: 4.2,
  pieData: [
    { name: "Male", value: 50 },
    { name: "Female", value: 40 },
    { name: "Non-binary", value: 10 }
  ],
  activeIndex: null,
  setActiveIndex: () => {}
};
const engagementMetrics = {
  jobPostingAgingData: [
    { title: "Frontend Dev", daysOpen: 15 },
    { title: "Backend Dev", daysOpen: 30 },
    { title: "HR Manager", daysOpen: 10 }
  ],
  engagementRate: 68, // percent
  followUpRate: 45, // percent
  pieData: [
    { name: "Applied", value: 40 },
    { name: "Shared", value: 25 },
    { name: "Commented", value: 35 }
  ]
};
const costMetrics = {
  costPerJob: "$120",
  costPerCandidate: "$45",
  referralConversionRate: "32%",
  pieData: [
    { name: "Ads", value: 50 },
    { name: "Recruiter Time", value: 30 },
    { name: "Job Boards", value: 20 }
  ]
};
const candidateExpMetrics = {
  satisfactionScore: 4.5, // Candidate Satisfaction (out of 5)
  communicationRate: 85, // Communication rate in percentage
  completionRate: 92, // Application Completion Rate in percentage
  pieData: [
    { name: "Satisfaction", value: 45, color: "#4caf50" }, // Green for satisfaction
    { name: "Communication", value: 35, color: "#f44336" }, // Red for communication
    { name: "Application Completed", value: 20, color: "#2196f3" } // Blue for completed applications
  ],
  barData: [
    { label: "Satisfaction", value: 4.5 },
    { label: "Communication", value: 85 },
    { label: "Completion Rate", value: 92 }
  ]
};
const jobPostingMetrics = {
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

// Sample metric data
const metricData = {
  timeToFirstInterview: 14, // in days
  timeToHire: 18, // in days
  conversionRate: 45, // in percentage
  dropOffRate: 25 // in percentage
};
const candidateMetrics = {
  qualificationRate: 68,
  qualityOfHire: 4.2,
  resumeToInterviewRatio: "12:1",
  pieData: [
    { name: "Qualified", value: 68 },
    { name: "Unqualified", value: 32 }
  ]
};

const hiringEfficiencyMetrics = {
  timeToScreen: 6,
  timeBetweenStages: 3.5,
  panelFeedbackTime: 2.2,
  timelineData: [
    { stage: "Screening", days: 1 },
    { stage: "1st Interview", days: 2 },
    { stage: "Final Interview", days: 3 },
    { stage: "Offer Decision", days: 1.5 }
  ]
};

const CANDIDATE_QUALITY_COLORS = ["#51cf66", "#ffa94d"];

const chartData = [
  { stage: "Applied", count: metricData.applied },
  { stage: "Interviewing", count: metricData.interviewing },
  { stage: "Offered", count: metricData.offered },
  { stage: "Hired", count: metricData.hired }
];

const jobFillRateChart = [
  { name: "Filled", value: metricData.jobFillRate },
  { name: "Unfilled", value: 100 - metricData.jobFillRate }
];

const COLORS = ["#51cf66", "#dee2e6"];
const interviewMetrics = {
  compositeScore: 85,
  calibrationLeaderboard: [
    { name: "A. Kumar", deviation: 0.4 },
    { name: "B. Sharma", deviation: 1.2 },
    { name: "C. Patel", deviation: 0.6 },
    { name: "D. Singh", deviation: 2.1 }
  ],
  avgFeedbackTime: 10,
  calibrationLeaderboardData: [
    { name: "A. Kumar", deviation: 0.4 },
    { name: "B. Sharma", deviation: 1.2 },
    { name: "C. Patel", deviation: 0.6 },
    { name: "D. Singh", deviation: 2.1 }
  ],
  scoreHeatmapData: [
    { department: "Engineering", role: "Frontend Developer", avgScore: 4.5 },
    { department: "Engineering", role: "Backend Developer", avgScore: 3.9 },
    { department: "HR", role: "HR Manager", avgScore: 3.2 },
    { department: "Marketing", role: "Marketing Specialist", avgScore: 4.1 }
  ],
  scoreDistributionData: [
    { label: "1-2", value: 10 },
    { label: "3-4", value: 60 },
    { label: "5", value: 30 }
  ],
  feedbackRateData: [
    { name: "Feedback Submitted <24h", value: 85, color: "#82ca9d" },
    { name: "Feedback >24h", value: 10, color: "#8884d8" },
    { name: "Missing Feedback", value: 5, color: "#ff7f0e" }
  ],
  avgScore: 4.2,
  scoreSpread: {
    "1-2": 10,
    "3-4": 60,
    5: 30
  },
  outliers: 2,
  avgDeviation: 0.9,
  highDeviationRate: 25,
  feedback24hRate: 85,
  missingFeedbackRate: 5
};

// Styled Components
const topStats = [
  { title: "Total Open Positions", value: 24 },
  { title: "Total New Applications", value: 142 },
  { title: "Total Upcoming Interviews", value: 18 },
  { title: "Total Hires This Month", value: 9 }
];
const EfficiencyInsights = ({ metricData }) => (
  <>
    <SubText>Efficiency Insights</SubText>

    <InfoGrid>
      {/* Avg. Response Time */}
      <InfoItem>
        <span>Avg. Response Time</span>
        <Badge color="#38bdf8">{metricData.avgResponseTime}</Badge>
      </InfoItem>

      {/* Drop-off Stages */}
      <StepInsight>
        <Stage>Applied</Stage>
        <ArrowRight size={16} color="#007bff" />
        <Stage>Interview</Stage>
        <DropRate>{metricData.dropOffRates.appliedToInterviewing}%</DropRate>
      </StepInsight>

      <StepInsight>
        <Stage>Interview</Stage>
        <ArrowRight size={16} color="#007bff" />
        <Stage>Offered</Stage>
        <DropRate>{metricData.dropOffRates.interviewingToOffered}%</DropRate>
      </StepInsight>

      <StepInsight>
        <Stage>Offered</Stage>
        <ArrowRight size={16} color="#007bff" />
        <Stage>Hired</Stage>
        <DropRate>{metricData.dropOffRates.offeredToHired}%</DropRate>
      </StepInsight>
    </InfoGrid>
  </>
);

const RecruitmentEfficiencyMetrics = ({ metricData }) => {
  const areaChartData = [
    { date: "Jan", timeToFirstInterview: 12, timeToHire: 20, conversionRate: 40 },
    { date: "Feb", timeToFirstInterview: 14, timeToHire: 18, conversionRate: 42 },
    { date: "Mar", timeToFirstInterview: 10, timeToHire: 22, conversionRate: 35 }
  ];

  return (
    <GridItem col={8}>
      <MetricCard>
        <CardTitle>Recruitment Efficiency Metrics</CardTitle>

        <InfoSection>
          {/* Stacked Area Chart for cumulative metrics */}
          <ChartSection>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="timeToFirstInterview"
                  stackId="1"
                  stroke={COLORS.primary}
                  fill={COLORS.primary}
                />
                <Area
                  type="monotone"
                  dataKey="timeToHire"
                  stackId="1"
                  stroke={COLORS.secondary}
                  fill={COLORS.secondary}
                />
                <Area
                  type="monotone"
                  dataKey="conversionRate"
                  stackId="1"
                  stroke={COLORS.tertiary}
                  fill={COLORS.tertiary}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartSection>

          {/* <InfoText>
            <CenteredText>Recruitment Metrics Over Time</CenteredText>
            <SubText>
              Track cumulative recruitment performance trends across time, focusing on time-to-hire,
              time-to-interview, and conversion rates.
            </SubText>
          </InfoText> */}
        </InfoSection>
      </MetricCard>
    </GridItem>
  );
};

const velocityData = [
  { week: "W1", candidates: 5 },
  { week: "W2", candidates: 9 },
  { week: "W3", candidates: 7 },
  { week: "W4", candidates: 10 }
];
const CandidatePipeline = () => {
  const [showInsights, setShowInsights] = useState(true);

  return (
    <GridItem col={4}>
      <MetricCard>
        {/* Title and Icon */}
        <FlexWrap style={{ justifyContent: "space-between" }}>
          <CardTitle>Candidate Pipeline</CardTitle>
          <TrendingUp size={20} color="#3b82f6" />
        </FlexWrap>

        {/* Stage Progress Bars */}
        <div style={{ margin: "1.2rem 0" }}>
          {[
            { label: "Applied", value: 142 },
            { label: "Interviewing", value: 68 },
            { label: "Offered", value: 22 },
            { label: "Hired", value: 9 }
          ].map((stage, idx) => (
            <div key={idx} style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.9rem",
                  color: "#495057",
                  marginBottom: "0.3rem"
                }}
              >
                <span>{stage.label}</span>
                <span>{stage.value}</span>
              </div>
              <div
                style={{
                  background: "#e9ecef",
                  height: "8px",
                  borderRadius: "4px",
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    width: `${(stage.value / 142) * 100}%`,
                    background: "#3b82f6",
                    height: "100%",
                    transition: "width 0.3s"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Insights Toggle */}
        <div
          onClick={() => setShowInsights(!showInsights)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.85rem",
            color: "#3b82f6",
            fontWeight: "500"
          }}
        >
          <span>Show Insights</span>
          {showInsights ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {/* Insights Section */}
        {showInsights && (
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                fontSize: "0.85rem",
                color: "#6c757d",
                marginBottom: "0.5rem"
              }}
            >
              Avg. Days from Applied → Hired:{" "}
              <span style={{ fontWeight: "bold", color: "#111" }}>{avgDaysToHire} days</span>
            </div>

            <div style={{ fontSize: "0.85rem", color: "#6c757d" }}>
              Candidates progressed per week
            </div>

            <div style={{ width: "100%", height: 100 }}>
              <ResponsiveContainer>
                <LineChart data={velocityData}>
                  <XAxis dataKey="week" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="candidates"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </MetricCard>
    </GridItem>
  );
};
const avgDaysToHire = 18;
const PredictiveAnalyticsModule = () => {
  return (
    <GridItem col={6}>
      <MetricCard>
        <CardTitle>Predictive Analytics & Forecasting</CardTitle>
        <FlexWrap>
          <InfoGrid style={{ flex: 1 }}>
            <InfoItem>
              <LineIcon size={16} style={{ marginRight: 6 }} />
              <span>Forecast vs Actual Hires</span>
            </InfoItem>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={predictiveData.forecastVsActual}>
                <XAxis dataKey="month" stroke="#495057" fontSize={12} />
                <YAxis stroke="#495057" fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  animationDuration={800}
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  animationDuration={800}
                />
              </LineChart>
            </ResponsiveContainer>

            <InfoItem>
              <Users size={16} style={{ marginRight: 6 }} />
              <span>Attrition Rate Prediction:</span>
              <span>{predictiveData.attritionRate}%</span>
            </InfoItem>

            <InfoItem>
              <TrendingUp size={16} style={{ marginRight: 6 }} />
              <span>Pipeline Sufficiency:</span>
              <span>{predictiveData.pipelineSufficiency}%</span>
            </InfoItem>

            <InfoItem>
              <Clock4 size={16} style={{ marginRight: 6 }} />
              <span>Predicted Time-to-Fill:</span>
              <span>{predictiveData.timeToFillPrediction} days</span>
            </InfoItem>
          </InfoGrid>
        </FlexWrap>
      </MetricCard>
    </GridItem>
  );
};
const HeatmapChart = ({ data, xKey, yKey, colorRange, cellRender }) => {
  // Calculate max value in the dataset for scaling purposes
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <ComposedChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis dataKey={yKey} />
      <Tooltip />

      <Bar dataKey="value" barSize={30} radius={[4, 4, 0, 0]}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.value === maxValue ? colorRange[1] : colorRange[0]}
          />
        ))}
      </Bar>

      {/* You can render text or values in the cells */}
      {data.map((entry, index) => (
        <text
          key={`text-${index}`}
          x={entry.cx}
          y={entry.cy}
          textAnchor="middle"
          fill="#000"
          fontSize={12}
        >
          {cellRender(entry.value)}
        </text>
      ))}
    </ComposedChart>
  );
};
export const RMSDashboard = () => {
  return (
    <Section>
      <Grid>
        <GridItem col={3}>
          <MetricCard>
            <FlexWrap style={{ justifyContent: "space-between" }}>
              <CardTitle>Total Open Positions</CardTitle>
              <Briefcase size={20} color="#3b82f6" />
            </FlexWrap>
            <MetricValue>24</MetricValue>
            <SubText>Currently Open</SubText>
          </MetricCard>
        </GridItem>

        <GridItem col={3}>
          <MetricCard>
            <FlexWrap style={{ justifyContent: "space-between" }}>
              <CardTitle>Total New Applications</CardTitle>
              <FileText size={20} color="#16a34a" />
            </FlexWrap>
            <MetricValue>142</MetricValue>
            <SubText>Applied This Week</SubText>
          </MetricCard>
        </GridItem>

        <GridItem col={3}>
          <MetricCard>
            <FlexWrap style={{ justifyContent: "space-between" }}>
              <CardTitle>Total Upcoming Interviews</CardTitle>
              <CalendarClock size={20} color="#f59e0b" />
            </FlexWrap>
            <MetricValue>18</MetricValue>
            <SubText>Scheduled Next 7 Days</SubText>
          </MetricCard>
        </GridItem>

        <GridItem col={3}>
          <MetricCard>
            <FlexWrap style={{ justifyContent: "space-between" }}>
              <CardTitle>Total Hires This Month</CardTitle>
              <UserCheck size={20} color="#0ea5e9" />
            </FlexWrap>
            <MetricValue>9</MetricValue>
            <SubText>Joined This Month</SubText>
          </MetricCard>
        </GridItem>
      </Grid>
      <Grid>
        {/* Grid Item 1: 8 columns */}
        <CandidatePipeline />
        <RecruitmentEfficiencyMetrics metricData={metricData} jobFillRateChart={jobFillRateChart} />
        {/* Grid Item 3: 12 columns (full width) */}
        {/* <GridItem col={4}>
          <MetricCard>
            <CardTitle>Recruiter Performance Metrics</CardTitle>
            <FlexWrap>
              <InfoGrid style={{ flex: 1 }}>
                <InfoBlock>
                  <strong>Candidates per Recruiter</strong>
                  <div>Avg: 32 candidates/month</div>
                </InfoBlock>
                <InfoBlock>
                  <strong>Interview-to-Offer Ratio</strong>
                  <div>45%</div>
                </InfoBlock>
                <InfoBlock>
                  <strong>Recruiter Activity Level</strong>
                  <div>
                    <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                      <li>Applications Reviewed: 120</li>
                      <li>Interviews Scheduled: 45</li>
                      <li>Offers Extended: 20</li>
                    </ul>
                  </div>
                </InfoBlock>
              </InfoGrid>
            </FlexWrap>
          </MetricCard>
        </GridItem> */}
      </Grid>

      <Grid>
        {/* Left: Job Views and Applications per Posting */}
        <GridItem col={6}>
          <MetricCard>
            <CardTitle>Job Posting Engagement</CardTitle>

            {/* Top Metrics with Icons */}
            <div
              style={{ padding: "1rem", borderBottom: "1px solid #dee2e6", marginBottom: "1rem" }}
            >
              <FlexWrap style={{ gap: "1.5rem", justifyContent: "space-between" }}>
                <InfoItem style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#6c757d"
                    }}
                  >
                    <Eye size={16} />
                    <span style={{ fontSize: "0.9rem" }}>Total Job Views</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                    {jobPostingMetrics.totalViews}
                  </div>
                </InfoItem>
                <InfoItem style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#6c757d"
                    }}
                  >
                    <BarChart2 size={16} />
                    <span style={{ fontSize: "0.9rem" }}>Avg Views per Posting</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                    {jobPostingMetrics.avgViewsPerJob}
                  </div>
                </InfoItem>
                <InfoItem style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#6c757d"
                    }}
                  >
                    <FileText size={16} />
                    <span style={{ fontSize: "0.9rem" }}>Applications per Posting</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                    {jobPostingMetrics.avgApplicationsPerJob}
                  </div>
                </InfoItem>
              </FlexWrap>
            </div>

            {/* Applications Chart */}
            <div style={{ padding: "0 1rem 1rem" }}>
              <ResponsiveContainer width="100%" height={200} style={{ padding: "6px" }}>
                <BarChart
                  data={jobPostingMetrics.applicationsChartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
                >
                  <XAxis
                    dataKey="jobTitle"
                    stroke="#495057"
                    angle={-20}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#495057" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "4px",
                      borderColor: "#ced4da"
                    }}
                  />
                  <Bar
                    dataKey="applications"
                    fill="#4dabf7"
                    radius={[6, 6, 0, 0]}
                    animationDuration={800}
                    animationBegin={100}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  color: "#6c757d"
                }}
              >
                Applications per Job Title
              </div>
            </div>
          </MetricCard>
        </GridItem>

        {/* Right: Top Performing Job Sources */}
        <GridItem col={6}>
          <MetricCard>
            <CardTitle>Top Job Sources</CardTitle>
            <ResponsiveContainer width="100%" height={250} style={{ padding: "6px" }}>
              <BarChart layout="vertical" data={jobPostingMetrics.topSources}>
                <XAxis type="number" stroke="#495057" />
                <YAxis type="category" dataKey="source" stroke="#495057" />
                <Tooltip />
                <Bar dataKey="count" fill="#82c91e" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <InfoGrid>
              {jobPostingMetrics.topSources.slice(0, 3).map((src) => (
                <InfoItem key={src.source}>
                  <span>{src.source}</span>
                  <span>{src.count} applicants</span>
                </InfoItem>
              ))}
            </InfoGrid>
          </MetricCard>
        </GridItem>
      </Grid>

      <Grid>
        {/* Candidate Quality Metrics */}
        <PredictiveAnalyticsModule />

        {/* Hiring Process Efficiency */}
        <GridItem col={6}>
          <MetricCard>
            <CardTitle>Hiring Process Efficiency</CardTitle>
            <ResponsiveContainer width="100%" height={235}>
              <BarChart data={hiringEfficiencyMetrics.timelineData}>
                <XAxis dataKey="stage" stroke="#495057" />
                <YAxis stroke="#495057" />
                <Tooltip />
                <Bar dataKey="days" fill="#ff922b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <InfoGrid>
              <InfoItem>
                <span>Avg. Time to Screen:</span>
                <span>{hiringEfficiencyMetrics.timeToScreen} hrs</span>
              </InfoItem>
              <InfoItem>
                <span>Time Between Interview Stages:</span>
                <span>{hiringEfficiencyMetrics.timeBetweenStages} days</span>
              </InfoItem>
              <InfoItem>
                <span>Interview Panel Feedback Time:</span>
                <span>{hiringEfficiencyMetrics.panelFeedbackTime} days</span>
              </InfoItem>
            </InfoGrid>
          </MetricCard>
        </GridItem>
      </Grid>

      <Grid gap={20} style={{ marginTop: 24 }}>
        {/* Diversity and Inclusion Metrics */}
        <GridItem col={6}>
          <MetricCard>
            <CardTitle>Diversity & Inclusion Metrics 🌍</CardTitle>
            <FlexWrap>
              <InfoGrid style={{ flex: 1 }}>
                <InfoItem>
                  <span>Applicant Diversity Ratio:</span>
                  <span>{diversityMetrics.applicantDiversityRatio}%</span>
                </InfoItem>
                <InfoItem>
                  <span>Diversity in Hires:</span>
                  <span>{diversityMetrics.diversityInHires}%</span>
                </InfoItem>
                <InfoItem>
                  <span>Diversity of Interview Panel:</span>
                  <span>{diversityMetrics.panelDiversityScore}/5</span>
                </InfoItem>
              </InfoGrid>

              <div style={{ flex: 1, position: "relative" }}>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={diversityMetrics.pieData}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={70}
                      label={({ name }) => name}
                      stroke="none"
                      activeIndex={diversityMetrics.activeIndex}
                      activeShape={(props) => (
                        <g>
                          <Sector {...props} outerRadius={80} />
                          <text x={props.cx} y={props.cy} dy={8} textAnchor="middle" fill="#333">
                            {props.name}
                          </text>
                        </g>
                      )}
                      onMouseEnter={(_, index) => diversityMetrics.setActiveIndex(index)}
                      onMouseLeave={() => diversityMetrics.setActiveIndex(null)}
                    >
                      {diversityMetrics.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={DIVERSITY_COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <LegendBox>
                  {diversityMetrics.pieData.map((entry, index) => (
                    <LegendItem key={index}>
                      <ColorDot style={{ backgroundColor: DIVERSITY_COLORS[index] }} />
                      {entry.name}
                    </LegendItem>
                  ))}
                </LegendBox>
              </div>
            </FlexWrap>
            <InfoNote style={{ color: "#888", fontSize: 12, marginTop: 10 }}>
              Empowering equity through inclusive hiring practices.
            </InfoNote>
          </MetricCard>
        </GridItem>

        {/* Candidate Experience Metrics */}
        <GridItem col={6}>
          <MetricCard>
            <CardTitle>Candidate Experience Metrics 💬</CardTitle>
            <FlexWrap>
              {/* InfoGrid Section */}
              <InfoGrid style={{ flex: 1 }}>
                <InfoItem>
                  <span>Candidate Satisfaction:</span>
                  <span>{candidateExpMetrics.satisfactionScore}/5</span>
                </InfoItem>
                <InfoItem>
                  <span>Communication Rate:</span>
                  <span>{candidateExpMetrics.communicationRate}%</span>
                </InfoItem>
                <InfoItem>
                  <span>Application Completion Rate:</span>
                  <span>{candidateExpMetrics.completionRate}%</span>
                </InfoItem>
              </InfoGrid>

              {/* 3D Pie Chart Section */}
              <div style={{ flex: 1 }}>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={candidateExpMetrics.pieData}
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      startAngle={90}
                      endAngle={450}
                      paddingAngle={5}
                      isAnimationActive={true}
                      animationDuration={1000}
                      animationEasing="ease-out"
                      label
                    >
                      {candidateExpMetrics.pieData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CANDIDATE_QUALITY_COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </FlexWrap>

            {/* Additional Note */}
            <InfoNote style={{ color: "#888", fontSize: 12, marginTop: 10 }}>
              Happy candidates build strong employer brands.
            </InfoNote>
          </MetricCard>
        </GridItem>
      </Grid>
    </Section>
  );
};

{
  /* 9. Job Posting & Candidate Engagement Metrics */
}
{
  /* <Grid>
<GridItem col={12}>
  <MetricCard>
    <CardTitle>Interview Intelligence Metrics</CardTitle>

    <FlexWrap>

      <InfoGrid style={{ flex: 1, minWidth: "50%" }}>
        {/* Interview Intelligence Score */
}
//         <InfoNote style={{ textAlign: "center", marginTop: 20, fontWeight: 600 }}>
//           🎯 Score:{" "}
//           <span style={{ color: "#4dabf7" }}>{interviewMetrics.compositeScore}/100</span>
//         </InfoNote>

//         {/* Calibration Leaderboard */}
//         <InfoItem>
//           <strong>Top Interviewers:</strong>
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             {interviewMetrics.calibrationLeaderboard.slice(0, 3).map((item, index) => (
//               <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
//                 <span>{item.name}</span> <span>{item.deviation}</span>
//               </li>
//             ))}
//           </ul>
//         </InfoItem>

//         {/* Avg Feedback Time */}
//         <InfoItem>
//           <strong>Avg. Feedback:</strong>{" "}
//           <span>{interviewMetrics.avgFeedbackTime} hrs</span>
//         </InfoItem>
//       </InfoGrid>

//       {/* RIGHT CHARTS PANEL */}
//       <div style={{ flex: 1, paddingLeft: "1rem", minWidth: "50%" }}>
//         {/* Interviewer Calibration Bar Chart */}
//         <ResponsiveContainer width="100%" height={200}>
//           <BarChart data={interviewMetrics.calibrationLeaderboardData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="deviation" fill="#82ca9d" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Score Heatmap */}
//         <ResponsiveContainer width="100%" height={200}>
//           <HeatmapChart
//             data={interviewMetrics.scoreHeatmapData}
//             xKey="role"
//             yKey="department"
//             colorRange={["#e4f7fa", "#4dabf7"]}
//             cellRender={(value) => <div>{value}</div>}
//           />
//         </ResponsiveContainer>
//       </div>
//     </FlexWrap>
//   </MetricCard>
// </GridItem>
// </Grid> */}
