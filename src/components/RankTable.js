"use client";
// src/components/RankTable.js
const RankTable = ({ stocks }) => {
  return (
    <section id="rank-table" className="bg-white p-6 my-8">
      <h2 className="text-2xl font-semibold mb-4">Top 25 Stocks</h2>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Rank</th>
            <th className="border p-2">Stock Name</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.slice(0, 25).map((stock, index) => (
            <tr key={index}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{stock.name}</td>
              <td className="border p-2">{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RankTable;
