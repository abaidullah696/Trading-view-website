// src/app/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// src/app/layout.js (or _app.js for older Next.js versions)
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
