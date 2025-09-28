import { useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import PublicReviews from "./pages/PublicReviews.jsx";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setPage("dashboard")} className="px-4 py-2 bg-gray-800 text-white rounded">
          Dashboard
        </button>
        <button onClick={() => setPage("public")} className="px-4 py-2 bg-gray-800 text-white rounded">
          Public Reviews
        </button>
      </div>

      {page === "dashboard" && <Dashboard />}
      {page === "public" && <PublicReviews />}
    </div>
  );
}
