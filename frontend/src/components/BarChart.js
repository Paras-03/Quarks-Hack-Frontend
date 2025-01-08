import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const dailyFitnessScores = [85, 88, 90, 84, 87, 92, 80, 85, 91, 89];

  const dailyLabels = [
    "2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05", 
    "2025-01-06", "2025-01-07", "2025-01-08", "2025-01-09", "2025-01-10"
  ];

  const chartData = {
    labels: dailyLabels,
    datasets: [
      {
        label: "Overall Fitness Score",
        data: dailyFitnessScores,
        backgroundColor: "rgba(26, 188, 156, 0.6)",
        borderColor: "rgba(26, 188, 156, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options for customizing the graph
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          maxRotation: 45, // Tilt the x-axis labels by 45 degrees
          minRotation: 45, // Apply the same rotation on all labels
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, // Change stepSize to 20 for the y-axis
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} height={100} />;
};

export default BarChart;
