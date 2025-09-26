import { useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import PublicReviews from "./pages/PublicReviews.jsx";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("public")}>Public Reviews</button>
      </nav>

      {page === "dashboard" && <Dashboard />}
      {page === "public" && <PublicReviews />}
    </div>
  );
}
