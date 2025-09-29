import { useEffect, useState } from "react";
import { getApprovedReviews } from "../api/reviews.js";

export default function PublicReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getApprovedReviews().then((data) => {
      console.log("Approved reviews:", data);
      setReviews(data.reviews || []);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🌟 Public Reviews</h1>

      {reviews.length === 0 && (
        <p className="text-gray-500">No approved reviews yet.</p>
      )}

      <div className="space-y-6">
        {reviews.map((r) => (
          <div
            key={r.reviewId}
            className="bg-gray-50 shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{r.listingName}</h2>
            <p className="text-gray-600 text-sm mb-2">Guest: {r.guestName}</p>
            <p className="text-gray-800 italic mb-3">"{r.publicReview}"</p>
            <span className="text-yellow-600 font-semibold">
              ⭐ {r.rating}/10
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
