import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

// Register the components for Chart.js (e.g., scales, elements, plugins)
Chart.register(...registerables);

const LineChart = () => {
  // Sample Data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Chart configuration options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000, // 1-second animation
      easing: "easeInOutBounce",
    },
  };

  return (
      <Line data={data} options={options} />
  );
};

export default LineChart;
