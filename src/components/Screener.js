"use client"
// src/components/Screener.js
export default function Screener() {
  return (
    <section id="screener" className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Stock Screener
        </h2>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for stocks..."
            className="p-2 rounded-md shadow-inner w-1/2"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md ml-4 hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
