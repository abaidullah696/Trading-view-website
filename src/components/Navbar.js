"use client";
// src/components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-semibold">
          StockViz
        </Link>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="#dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#graphs" className="hover:underline">
              Graphs
            </Link>
          </li>
          <li>
            <Link href="#rank-table" className="hover:underline">
              Rank Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
