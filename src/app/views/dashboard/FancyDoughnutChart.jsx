import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const FancyDoughnutChart = () => {
  const data = {
    labels: ["Solar", "Grid", "Battery"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          "rgba(0, 200, 83, 0.9)", // Solar
          "rgba(2, 136, 209, 0.9)", // Grid
          "rgba(251, 192, 45, 0.9)" // Battery
        ],
        borderColor: "#1e1e1e",
        borderWidth: 3,
        hoverOffset: 12,
        cutout: "55%",
        offset: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ccc",
          font: {
            size: 13,
            weight: "500"
          },
          padding: 20
        }
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14
        },
        formatter: (value) => `${value}%`
      },
      tooltip: {
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#555",
        borderWidth: 1
      }
    }
  };

  return (
    <div
      style={{
        height: 300,
        width: "100%",
        background: "linear-gradient(145deg, #1a1a1a, #111)",
        borderRadius: "20px",
        padding: "1rem",
        boxShadow: "inset 6px 6px 12px #0f0f0f, inset -6px -6px 12px #222"
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default FancyDoughnutChart;
