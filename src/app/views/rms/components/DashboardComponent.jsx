import styled from "styled-components";

// Grid container (like the main Grid component)
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12-column grid system */
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Full width on mobile, single column */
  }
`;

// GridItem (like each GridItem component that can have dynamic col prop)
export const GridItem = styled.div`
  grid-column: span ${(props) => props.col || 12}; /* The col prop will control the span */
  width: 100%; /* Ensure full width within the grid column */

  @media (max-width: 768px) {
    grid-column: span 12; /* On small screens, each item takes full width */
  }
`;

export const Section = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: grid;
  gap: 2rem;
`;

export const MetricCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: ${(props) =>
    props.col ? `${(props.col / 12) * 100}%` : "100%"}; /* Flexibly sets the width */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #1c1c1e;
  padding-left: 0.75rem;
  border-left: 4px solid #3b82f6; /* blue-500 */
  letter-spacing: 0.3px;
  line-height: 1.3;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #495057;
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;

  span:first-child {
    font-weight: 500;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ChartContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  font-weight: 600;
  color: #343a40;
  text-align: center;
`;

export const CardRows = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || 3}, 1fr); /* Default to 3 columns */
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards vertically on smaller screens */
  }
`;

export const InfoBlock = styled.div`
  background: #f1f3f5;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.95rem;
  color: #495057;
`;

export const LegendBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 12px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const ColorDot = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 6px;
  border-radius: 50%;
  display: inline-block;
`;
export const InfoNote = styled.div`
  margin-top: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #5a5a5a;
  background: #f1f5f9;
  border-left: 4px solid #3b82f6; /* blue-500 */
  padding: 10px 14px;
  border-radius: 6px;
  font-style: italic;
  transition: background 0.3s ease;

  &:hover {
    background: #e2e8f0; /* slightly darker */
  }
`;
export const SubText = styled.p`
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 0.5rem;
`;
export const MetricValue = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6; /* blue-500 */
  margin: 0;
`;
export const Badge = styled.span`
  background: ${(props) => props.color || "#e2e8f0"};
  color: #1e293b;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  display: inline-block;
`;
export const StepInsight = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Stage = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #495057;

  /* Ensure responsiveness */
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.9rem;
  }
`;
export const DropRate = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #495057;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.1rem;
    color: #6c757d;
  }
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
export const ChartSection = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
