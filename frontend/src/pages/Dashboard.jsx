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
      await fetchReviews(); // refresh list
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
      await fetchReviews(); // refresh list
    } catch (err) {
      console.error("Reject error:", err);
      setMessage(`❌ Failed to reject review ${id}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {message && (
        <div className="mb-4 p-2 bg-gray-100 border rounded">{message}</div>
      )}

      {loading && <p className="mb-2">⏳ Processing...</p>}

      {reviews.length === 0 && <p>No reviews found.</p>}

      {reviews.map((r) => (
        <ReviewCard
          key={r.reviewId}
          review={r}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      ))}
    </div>
  );
}
