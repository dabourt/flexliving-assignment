import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import PublicReviews from "./pages/PublicReviews.jsx";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/public">Public Reviews</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/public" element={<PublicReviews />} />
      </Routes>
    </Router>
  );
}
