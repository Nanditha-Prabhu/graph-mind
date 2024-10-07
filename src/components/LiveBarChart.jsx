import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LiveBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales",
        data: [10, 15, 8, 12],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1,
      },
    ],
  });

  // Chart configuration options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1500,
      easing: "easeInOutElastic",
    },
  };

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newData = prevData.datasets[0].data.map(() =>
          Math.floor(Math.random() * 20 + 5)
        ); // Generate random data between 5 and 25

        return {
          ...prevData,
          datasets: [{ ...prevData.datasets[0], data: newData }],
        };
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    // <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <Bar data={chartData} options={options} />
    // </div>
  );
};

export default LiveBarChart;
