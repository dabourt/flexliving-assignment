import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-emerald-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          FlexLiving
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-emerald-200 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/public"
            className="hover:text-emerald-200 transition-colors duration-200"
          >
            Public Reviews
          </Link>
        </div>
      </div>
    </nav>
  );
}
