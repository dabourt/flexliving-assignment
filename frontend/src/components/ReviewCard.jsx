export default function ReviewCard({ review, onApprove, onReject }) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-900">
        {review.listingName}
      </h2>
      <p className="text-sm text-gray-600">Guest: {review.guestName}</p>
      <p className="text-gray-700 italic my-2">"{review.publicReview}"</p>
      <p className="text-yellow-600 font-bold">⭐ {review.rating}/10</p>

      <div className="mt-4 flex gap-3">
        {onApprove && (
          <button
            onClick={() => onApprove(review.reviewId)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            ✅ Approve
          </button>
        )}
        {onReject && (
          <button
            onClick={() => onReject(review.reviewId)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            ❌ Reject
          </button>
        )}
      </div>
    </div>
  );
}
