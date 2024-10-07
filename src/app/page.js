// src/app/page.js
import Hero from "@/components/Hero";
import Stocks from "@/components/Stocks";
import Screener from "@/components/Screener";
import Graph from "@/components/Graph";

const stocksData = [
  { name: "Apple", symbol: "AAPL", change: 2.5 },
  { name: "Google", symbol: "GOOGL", change: -1.3 },
  // Add more stock data
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stocks stocks={stocksData} />
      <Screener />
      <Graph />
    </>
  );
}
