"use client"
// src/components/Hero.js
export default function Hero() {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to StokViz</h1>
        <p className="text-xl mb-8">
          Your one-stop solution for tracking stock market trends and insights.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-gray-200">
            Get Started
          </button>
          <button className="bg-blue-700 px-6 py-2 rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
