// src/components/Statistics.js

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  // Data for the bar chart with adjusted colors
  const data = {
    labels: [
      "Dell XPS 13",
      "Dell XPS 13",
      "Dell XPS 13",
      "Dell XPS 13",
      "Dell XPS 13",
      "Dell XPS 13",
    ],
    datasets: [
      {
        label: "Price",
        data: [90, 80, 60, 70, 90, 100],
        backgroundColor: "#6B21A8", // Darker purple for "Price"
      },
      {
        label: "Total",
        data: [80, 70, 50, 60, 85, 90],
        backgroundColor: "#A78BFA", // Light purple for "Total"
      },
      {
        label: "Rating",
        data: [70, 60, 55, 75, 80, 95],
        backgroundColor: "#FCA5A5", // Light pink/red for "Rating"
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: "#666" },
        grid: { color: "#E5E7EB" }, // Light gray grid lines
      },
    },
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Header section */}
      <div className="w-full bg-purple-600 text-white py-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold">Statistics</h2>
        <p className="mt-2 text-center max-w-md">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart container */}
      <div className="bg-white rounded-lg shadow-md mt-10 p-8 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-700 mb-6">Statistics</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;
