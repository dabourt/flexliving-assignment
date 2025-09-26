import { useEffect, useState } from "react";
import { getAllReviews, approveReview, rejectReview } from "../api/reviews.js";
import ReviewCard from "../components/ReviewCard.jsx";

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((data) => {
      console.log("Fetched reviews:", data);
      setReviews(data.reviews || []);
    });
  }, []);

  const handleApprove = async (id) => {
    await approveReview(id);
    alert(`Approved review ${id}`);
  };

  const handleReject = async (id) => {
    await rejectReview(id);
    alert(`Rejected review ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
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
