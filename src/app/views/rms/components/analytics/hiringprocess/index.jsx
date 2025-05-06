import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {
  GridItem,
  MetricCard,
  InfoGrid,
  InfoItem
} from "../../DashboardComponent";

// Temporary AI-mocked _initialData
const _initialData = {
  timelineData: [
    { stage: "Application", days: 4 },
    { stage: "Screening", days: 6 },
    { stage: "Interview", days: 8 },
    { stage: "Offer", days: 5 }
  ],
  timeToScreen: 2,
  timeBetweenStages: 3,
  panelFeedbackTime: 2
};

export const HiringProcessEfficiency = ({ hiringEfficiencyMetrics = _initialData }) => {
  return (
    <GridItem col={6}>
      <MetricCard style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
          Hiring Process Efficiency
        </h3>

        <div style={{ marginBottom: "1rem" }}>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={hiringEfficiencyMetrics.timelineData}>
              <XAxis dataKey="stage" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip />
              <Bar
                dataKey="days"
                fill="#f59e0b"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <InfoGrid style={{ gap: "1rem", fontSize: 14 }}>
          <InfoItem style={{ justifyContent: "space-between" }}>
            <span>Avg. Time to Screen</span>
            <strong>{hiringEfficiencyMetrics.timeToScreen} hrs</strong>
          </InfoItem>

          <InfoItem style={{ justifyContent: "space-between" }}>
            <span>Time Between Interview Stages</span>
            <strong>{hiringEfficiencyMetrics.timeBetweenStages} days</strong>
          </InfoItem>

          <InfoItem style={{ justifyContent: "space-between" }}>
            <span>Panel Feedback Time</span>
            <strong>{hiringEfficiencyMetrics.panelFeedbackTime} days</strong>
          </InfoItem>
        </InfoGrid>
      </MetricCard>
    </GridItem>
  );
};

HiringProcessEfficiency.propTypes = {
  hiringEfficiencyMetrics: PropTypes.shape({
    timelineData: PropTypes.arrayOf(
      PropTypes.shape({
        stage: PropTypes.string.isRequired,
        days: PropTypes.number.isRequired
      })
    ).isRequired,
    timeToScreen: PropTypes.number.isRequired,
    timeBetweenStages: PropTypes.number.isRequired,
    panelFeedbackTime: PropTypes.number.isRequired
  })
};
