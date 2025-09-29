import { useEffect, useState } from "react";
import { getAllReviews, approveReview, rejectReview } from "../api/reviews.js";
import ReviewCard from "../components/ReviewCard.jsx";

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();
      console.log("Fetched reviews:", data);
      setReviews(data.reviews || []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleApprove = async (id) => {
    setLoading(true);
    try {
      const res = await approveReview(id);
      console.log("Approve response:", res);
      setMessage(`✅ Review ${id} approved`);
      await fetchReviews();
    } catch (err) {
      console.error("Approve error:", err);
      setMessage(`❌ Failed to approve review ${id}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (id) => {
    setLoading(true);
    try {
      const res = await rejectReview(id);
      console.log("Reject response:", res);
      setMessage(`🚫 Review ${id} rejected`);
      await fetchReviews();
    } catch (err) {
      console.error("Reject error:", err);
      setMessage(`❌ Failed to reject review ${id}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Dashboard</h1>

      {message && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 shadow-sm">
          {message}
        </div>
      )}

      {loading && (
        <p className="mb-4 text-gray-600 animate-pulse">⏳ Processing...</p>
      )}

      {reviews.length === 0 && (
        <p className="text-gray-500">No reviews found.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <ReviewCard
            key={r.reviewId}
            review={r}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
}
