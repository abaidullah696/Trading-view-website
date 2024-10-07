"use client"; // Ensures this file is rendered client-side in Next.js

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registering chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["GOOG", "META", "APPL", "MSFT", "TSLA", "AMZN", "NFLX"],
  datasets: [
    {
      label: "Stock Price",
      data: [1500, 1750, 2000, 1950, 1850, 2100, 1400],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Top Stock Prices",
    },
  },
};

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-600 p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">StokViz</h1>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300">
                Stocks
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300">
                Screeners
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-10">
        {/* Section with the chart */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
            Stock Performance
          </h2>
          <div className="w-full h-96">
            <Bar data={data} options={options} />
          </div>
        </section>

        {/* Stock Table */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Top 10 Stocks
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Company</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Change</th>
                </tr>
              </thead>
              <tbody>
                {/* Example stock data */}
                <tr className="border-b">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Google Inc.</td>
                  <td className="px-4 py-3">$1,500</td>
                  <td className="px-4 py-3 text-green-600">+5.76%</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Meta Inc.</td>
                  <td className="px-4 py-3">$1,750</td>
                  <td className="px-4 py-3 text-red-600">-3.14%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Apple Inc.</td>
                  <td className="px-4 py-3">$2,000</td>
                  <td className="px-4 py-3 text-green-600">+8.45%</td>
                </tr>
                {/* Add more stock data as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>© 2024 StokViz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
