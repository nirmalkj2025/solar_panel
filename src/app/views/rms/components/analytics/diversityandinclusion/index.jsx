import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell
} from "recharts";
import { GridItem, MetricCard, InfoGrid, InfoItem, FlexWrap, InfoNote } from "../../DashboardComponent";

// Define constant colors for pie chart segments
const GENDER_COLORS = ["#3b82f6", "#f59e0b"]; // Male, Female
const ETHNICITY_COLORS = ["#10b981", "#f87171"]; // Ethnic Diversity, Other

// Temporary mock data for demonstration
const _initialData = {
  applicantDiversityRatio: 65,
  diversityInHires: 58,
  panelDiversityScore: 4,
  genderData: [
    { name: "Male", value: 50 },
    { name: "Female", value: 50 }
  ],
  ethnicityData: [
    { name: "Ethnic Diversity", value: 30 },
    { name: "Other", value: 20 }
  ],
  activeIndex: null,
  setActiveIndex: () => {}
};

export const DiversityAndInclusion = ({
  diversityMetrics = _initialData
}) => {
  return (
    <GridItem col={6}>
      <MetricCard style={{ padding: "1.5rem", minHeight: "400px" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
          Diversity & Inclusion Metrics 🌍
        </h3>

        <FlexWrap style={{ marginBottom: "1rem", alignItems: "flex-start" }}>
          <InfoGrid style={{ flex: 1, fontSize: "14px", color: "#333", marginRight: "1rem" }}>
            <InfoItem style={{ marginBottom: "0.8rem" }}>
              <span>Applicant Diversity Ratio</span>
              <strong>{diversityMetrics.applicantDiversityRatio}%</strong>
            </InfoItem>

            <InfoItem style={{ marginBottom: "0.8rem" }}>
              <span>Diversity in Hires</span>
              <strong>{diversityMetrics.diversityInHires}%</strong>
            </InfoItem>

            <InfoItem>
              <span>Diversity of Interview Panel</span>
              <strong>{diversityMetrics.panelDiversityScore}/5</strong>
            </InfoItem>
          </InfoGrid>

          {/* Flex container for the pie charts */}
          <div style={{ flex: 2, display: "flex", justifyContent: "space-between" }}>
            {/* Gender Diversity Pie Chart */}
            <div style={{ width: "48%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h4>Gender Diversity</h4>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Tooltip />
                  <Pie
                    data={diversityMetrics.genderData}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={60}
                    label={({ name, value }) => `${name}: ${value}%`}
                    stroke="none"
                    activeIndex={diversityMetrics?.activeIndex}
                    onMouseEnter={(_, index) => diversityMetrics.setActiveIndex(index)}
                    onMouseLeave={() => diversityMetrics.setActiveIndex(null)}
                  >
                    {diversityMetrics.genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={GENDER_COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Ethnicity Diversity Pie Chart */}
            <div style={{ width: "48%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h4>Ethnicity Diversity</h4>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Tooltip />
                  <Pie
                    data={diversityMetrics.ethnicityData}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={60}
                    label={({ name, value }) => `${name}: ${value}%`}
                    stroke="none"
                    activeIndex={diversityMetrics?.activeIndex}
                    onMouseEnter={(_, index) => diversityMetrics.setActiveIndex(index)}
                    onMouseLeave={() => diversityMetrics.setActiveIndex(null)}
                  >
                    {diversityMetrics.ethnicityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={ETHNICITY_COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FlexWrap>

        <InfoNote style={{ color: "#888", fontSize: 12, marginTop: "1rem" }}>
          Empowering equity through inclusive hiring practices.
        </InfoNote>
      </MetricCard>
    </GridItem>
  );
};

DiversityAndInclusion.propTypes = {
  diversityMetrics: PropTypes.shape({
    applicantDiversityRatio: PropTypes.number.isRequired,
    diversityInHires: PropTypes.number.isRequired,
    panelDiversityScore: PropTypes.number.isRequired,
    genderData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ).isRequired,
    ethnicityData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ).isRequired,
    activeIndex: PropTypes.number,
    setActiveIndex: PropTypes.func
  })
};
