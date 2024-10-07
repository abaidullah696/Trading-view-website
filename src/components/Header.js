// src/components/Header.js
"use client";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">StokViz</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="#stocks" className="hover:underline">
            Stocks
          </a>
          <a href="#screener" className="hover:underline">
            Screener
          </a>
          <a href="#graphs" className="hover:underline">
            Graphs
          </a>
        </nav>
      </div>
    </header>
  );
}
