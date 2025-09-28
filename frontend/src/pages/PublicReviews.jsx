import { useEffect, useState } from "react";
import { getApprovedReviews } from "../api/reviews.js";
import ReviewCard from "../components/ReviewCard.jsx";

export default function PublicReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getApprovedReviews().then((data) => {
      console.log("Approved reviews:", data);
      setReviews(data.reviews || []);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Public Reviews</h1>
      {reviews.length === 0 && <p>No approved reviews yet.</p>}
      {reviews.map((r) => (
        <ReviewCard key={r.reviewId} review={r} readOnly />
      ))}
    </div>
  );
}
