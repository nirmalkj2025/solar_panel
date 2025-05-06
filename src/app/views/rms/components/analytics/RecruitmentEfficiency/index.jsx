import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Dropdown, Menu, DatePicker as AntDatePicker, Space } from "antd";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {
  CardTitle,
  ChartSection,
  GridItem,
  InfoSection,
  MetricCard
} from "../../DashboardComponent";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const COLORS = {
  primary: "#51cf66",
  secondary: "#dee2e6"
};

// Define initial data (you could replace this with actual dynamic data)
const _initialdata = {
  recruitmentEfficiency: [
    { month: "Jan", date: "2025-01-01", timeToHire: 20, timeToFirstInterview: 12 },
    { month: "Feb", date: "2025-02-01", timeToHire: 18, timeToFirstInterview: 14 },
    { month: "Mar", date: "2025-03-01", timeToHire: 22, timeToFirstInterview: 10 },
    { month: "Apr", date: "2025-04-01", timeToHire: 17, timeToFirstInterview: 13 },
    { month: "May", date: "2025-05-01", timeToHire: 19, timeToFirstInterview: 11 }
  ]
};

export const RecruitmentEfficiency = () => {
  const rawData = _initialdata?.recruitmentEfficiency ?? [];
  // Define default date ranges and the UI state for them
  const [startDate, setStartDate] = useState(dayjs().startOf("year").format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [selectedRange, setSelectedRange] = useState("This Year");

  // Predefined ranges for quick selection
  const dateRanges = {
    "Last 7 Days": [dayjs().subtract(7, "days"), dayjs()],
    "Last 30 Days": [dayjs().subtract(30, "days"), dayjs()],
    "This Month": [dayjs().startOf("month"), dayjs()],
    "This Year": [dayjs().startOf("year"), dayjs()],
  };

  const handleRangeChange = (rangeKey) => {
    const [newStart, newEnd] = dateRanges[rangeKey];
    setStartDate(newStart.format("YYYY-MM-DD"));
    setEndDate(newEnd.format("YYYY-MM-DD"));
    setSelectedRange(rangeKey);
  };

  const filteredData = useMemo(() => {
    return rawData.filter((entry) => {
      const entryDate = dayjs(entry.date).format("YYYY-MM-DD");
      return entryDate >= startDate && entryDate <= endDate;
    });
  }, [rawData, startDate, endDate]);

  const handleReset = () => {
    setStartDate(dayjs().startOf("year").format("YYYY-MM-DD"));
    setEndDate(dayjs().format("YYYY-MM-DD"));
    setSelectedRange("This Year");
  };

  return (
    <GridItem col={6}>
      <MetricCard>
        <CardTitle>Recruitment Efficiency</CardTitle>

        {/* Date Range Filter */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Dropdown
            overlay={
              <Menu>
                {Object.keys(dateRanges).map((rangeKey) => (
                  <Menu.Item key={rangeKey} onClick={() => handleRangeChange(rangeKey)}>
                    {rangeKey}
                  </Menu.Item>
                ))}
              </Menu>
            }
            trigger={["click"]}
          >
            <Button>
              {selectedRange} <i className="fas fa-caret-down"></i>
            </Button>
          </Dropdown>

          <Space direction="vertical" size={10}>
            {/* <label>Custom Date Range</label> */}
            <div>
              <AntDatePicker
                value={dayjs(startDate)}
                onChange={(date) => setStartDate(date?.format("YYYY-MM-DD"))}
                format="YYYY-MM-DD"
                allowClear={false}
              />
              <span style={{ margin: "0 8px" }}>to</span>
              <AntDatePicker
                value={dayjs(endDate)}
                onChange={(date) => setEndDate(date?.format("YYYY-MM-DD"))}
                format="YYYY-MM-DD"
                allowClear={false}
              />
            </div>
          </Space>

          <Button onClick={handleReset} style={{ marginTop: "0rem" }}>
            Reset Filters
          </Button>
        </div>

        <InfoSection>
          <ChartSection>
            {filteredData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis
                    label={{
                      value: "Days",
                      angle: -90,
                      position: "insideLeft"
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="timeToHire"
                    fill={COLORS.primary}
                    name="Time to Hire (days)"
                  />
                  <Bar
                    dataKey="timeToFirstInterview"
                    fill={COLORS.secondary}
                    name="Time to First Interview (days)"
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p style={{ padding: "1rem", textAlign: "center" }}>
                No data available for the selected date range.
              </p>
            )}
          </ChartSection>
        </InfoSection>
      </MetricCard>
    </GridItem>
  );
};
