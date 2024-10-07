"use client";
// src/components/Stocks.js
export default function Stocks({ stocks }) {
  return (
    <section id="stocks" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Top 10 Stocks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{stock.name}</h3>
              <p className="text-gray-700">Symbol: {stock.symbol}</p>
              <p
                className={`text-lg font-bold ${
                  stock.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.change > 0 ? "+" : ""}
                {stock.change}%
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
