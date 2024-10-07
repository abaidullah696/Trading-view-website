"use client"
// src/components/Dashboard.js
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [topStocks, setTopStocks] = useState([]);
  const [bottomStocks, setBottomStocks] = useState([]);

  useEffect(() => {
    fetch("/api/stocks") // assuming you have an API set up to fetch stock data
      .then((res) => res.json())
      .then((data) => {
        setStocks(data);
        // Separate logic for top and bottom stocks can be added here
        setTopStocks(data.slice(0, 10)); // Top 10 stocks
        setBottomStocks(data.slice(-10)); // Bottom 10 stocks
      });
  }, []);

  return (
    <section id="dashboard" className="bg-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Daily Stock Info</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Top 10 Stocks */}
        <div className="bg-green-100 p-4 rounded shadow-md">
          <h3 className="font-bold text-lg mb-2">Top 10 Stocks</h3>
          <ul>
            {topStocks.map((stock, index) => (
              <li key={index} className="text-sm text-gray-700">
                {stock.name} - {stock.price}
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom 10 Stocks */}
        <div className="bg-red-100 p-4 rounded shadow-md">
          <h3 className="font-bold text-lg mb-2">Bottom 10 Stocks</h3>
          <ul>
            {bottomStocks.map((stock, index) => (
              <li key={index} className="text-sm text-gray-700">
                {stock.name} - {stock.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
