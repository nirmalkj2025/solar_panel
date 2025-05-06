import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
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
import { Users, Clock4, TrendingUp } from "lucide-react";

// Temporary AI-mocked _initialData
const _initialData = {
  forecastVsActual: [
    { month: "Jan", forecast: 20, actual: 18 },
    { month: "Feb", forecast: 25, actual: 23 },
    { month: "Mar", forecast: 28, actual: 30 },
    { month: "Apr", forecast: 32, actual: 29 }
  ],
  attritionRate: 12.5,
  pipelineSufficiency: 88,
  timeToFillPrediction: 14
};

export const PredictiveAnalytics = ({ predictiveData = _initialData }) => {
  return (
    <GridItem col={6}>
      <MetricCard style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
          Predictive Analytics
        </h3>

        <div style={{ marginBottom: "1rem" }}>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Forecast vs Actual Hires</div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={predictiveData.forecastVsActual}>
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 2 }}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#059669"
                strokeWidth={2}
                dot={{ r: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <InfoGrid style={{ gap: "1rem", fontSize: 14 }}>
          <InfoItem style={{ justifyContent: "space-between" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Users size={14} /> Attrition Rate
            </span>
            <strong>{predictiveData.attritionRate}%</strong>
          </InfoItem>

          <InfoItem style={{ justifyContent: "space-between" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <TrendingUp size={14} /> Pipeline Sufficiency
            </span>
            <strong>{predictiveData.pipelineSufficiency}%</strong>
          </InfoItem>

          <InfoItem style={{ justifyContent: "space-between" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Clock4 size={14} /> Time to Fill
            </span>
            <strong>{predictiveData.timeToFillPrediction} days</strong>
          </InfoItem>
        </InfoGrid>
      </MetricCard>
    </GridItem>
  );
};

PredictiveAnalytics.propTypes = {
  predictiveData: PropTypes.shape({
    forecastVsActual: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        forecast: PropTypes.number.isRequired,
        actual: PropTypes.number.isRequired
      })
    ).isRequired,
    attritionRate: PropTypes.number.isRequired,
    pipelineSufficiency: PropTypes.number.isRequired,
    timeToFillPrediction: PropTypes.number.isRequired
  })
};
