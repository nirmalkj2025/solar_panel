import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import { GridItem, MetricCard, CardTitle, InfoGrid, InfoItem, FlexWrap, InfoNote } from "../../DashboardComponent";

// Define constant colors for the pie chart segments
const CANDIDATE_QUALITY_COLORS = ["#3b82f6", "#f59e0b", "#10b981"]; // Example colors
const _initialData = {
    satisfactionScore: 4.2, // Example score out of 5
    communicationRate: 85,  // Example communication rate in percentage
    completionRate: 78,     // Example application completion rate in percentage
    pieData: [
      { name: "Satisfaction", value: 60 },
      { name: "Communication", value: 25 },
      { name: "Completion", value: 15 },
    ],
  };
const CandidateExperience = ({ candidateExpMetrics=_initialData }) => {
  return (
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
                 <ResponsiveContainer width="100%" height={280}>
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
  );
};

// PropTypes validation
CandidateExperience.propTypes = {
  candidateExpMetrics: PropTypes.shape({
    satisfactionScore: PropTypes.number.isRequired,
    communicationRate: PropTypes.number.isRequired,
    completionRate: PropTypes.number.isRequired,
    pieData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CandidateExperience;
