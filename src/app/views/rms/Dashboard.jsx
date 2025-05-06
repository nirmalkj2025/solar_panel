import React, { useMemo, useState } from "react";
import {
  MetricCard,
  CardTitle,
  Section,
  FlexWrap,
  Grid,
  GridItem,
  SubText,
  MetricValue,
} from "./components/DashboardComponent";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";
import { Briefcase, FileText, CalendarClock, UserCheck } from "lucide-react";
import CandidatePipeline from "./components/analytics/CandidatePipeline/InsightsDemo";
import { RecruitmentEfficiency } from "./components/analytics/RecruitmentEfficiency";
import { JobPostingEngagement } from "./components/analytics/JobPosting";
import { ConversionRate } from "./components/analytics/Conversionrate";
import { PredictiveAnalytics } from "./components/analytics/aiInsights/AIInsights";
import { HiringProcessEfficiency } from "./components/analytics/hiringprocess";
import { DiversityAndInclusion } from "./components/analytics/diversityandinclusion";
import CandidateExperience from "./components/analytics/candidateexperiance";
const candidateData = [
  { name: "John", createdAt: "2025-04-03", recruiter: "R1" },
  { name: "Alice", createdAt: "2025-04-10", recruiter: "R2" },
  { name: "Tom", createdAt: "2025-04-15", recruiter: "R1" },
  { name: "Eve", createdAt: "2025-04-20", recruiter: "R1" },
  { name: "Mark", createdAt: "2025-04-28", recruiter: "R3" },
];
// role: Determines the role of the user (Admin, Recruiter, or Client). This controls what data is visible to the user.
const role = "admin"; // Example role, can be 'admin', 'recruiter', or 'client'
const userRecruiter = "R1"; // Example recruiter for filtering candidates
const avgDaysToHire = 14;
dayjs.extend(isBetween);

// Sample metric data
const metricData = {
  timeToFirstInterview: 14, // in days
  timeToHire: 18, // in days
  conversionRate: 45, // in percentage
  dropOffRate: 25 // in percentage
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
        <CandidatePipeline
        role={role}
        userRecruiter={userRecruiter}
        data={candidateData}
        avgDaysToHire={avgDaysToHire}
      />
      <RecruitmentEfficiency metricData={metricData}/>
      </Grid>
      <Grid>
        {/* Left: Job Views and Applications per Posting */}
       <JobPostingEngagement/>
        {/* Right: ConversionRate */}
        <ConversionRate />
      </Grid>
      <Grid>
        {/* Candidate Quality Metrics */}
        <PredictiveAnalytics />
        {/* Hiring Process Efficiency */}
        <HiringProcessEfficiency />
      </Grid>
      <Grid gap={20}>
        {/* Diversity and Inclusion Metrics */}
          <DiversityAndInclusion/>
        {/* Candidate Experience Metrics */}
        <CandidateExperience />
      </Grid>
    </Section>
  );
};