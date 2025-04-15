import React from "react";
import { Card, Typography, CardContent } from "@mui/material";

const ChartCard = ({ title, subtitle, children }) => {
  return (
    <Card
      sx={{
        background: "radial-gradient(circle at top left, #1e1e2f, #12121a)",
        border: "1px solid #2e2e4e",
        color: "white",
        borderRadius: 2,
        px: 3,
        py: 2,
        height: "100%",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.05)"
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" sx={{ mb: 2, color: "#a0a0a0" }}>
            {subtitle}
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
