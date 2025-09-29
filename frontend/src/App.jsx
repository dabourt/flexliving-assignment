import { useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import PublicReviews from "./pages/PublicReviews.jsx";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Navbar */}
      <nav className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">🌿 FlexLiving</h1>

          {/* Links */}
          <div className="flex gap-6 text-base sm:text-lg">
            <button
              onClick={() => setPage("dashboard")}
              className={`transition-colors duration-200 ${
                page === "dashboard"
                  ? "font-semibold text-emerald-200 underline"
                  : "hover:text-emerald-200"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setPage("public")}
              className={`transition-colors duration-200 ${
                page === "public"
                  ? "font-semibold text-emerald-200 underline"
                  : "hover:text-emerald-200"
              }`}
            >
              Public Reviews
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Page Content */}
      <main className="flex-1 p-6">
        {page === "dashboard" && <Dashboard />}
        {page === "public" && <PublicReviews />}
      </main>
    </div>
  );
}
