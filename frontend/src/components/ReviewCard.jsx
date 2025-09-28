export default function ReviewCard({ review, onApprove, onReject }) {
  return (
    <div className="border p-4 rounded-lg shadow mb-4 bg-white">
      <h2 className="font-semibold">{review.listingName}</h2>
      <p className="text-gray-700">Guest: {review.guestName}</p>
      <p className="text-sm italic">"{review.publicReview}"</p>
      <p className="text-yellow-600 font-bold">
        Rating: {review.rating}/10
      </p>
      <div className="mt-2 flex gap-2">
        {onApprove && (
          <button
            onClick={() => onApprove(review.reviewId)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Approve
          </button>
        )}
        {onReject && (
          <button
            onClick={() => onReject(review.reviewId)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Reject
          </button>
        )}
      </div>
    </div>
  );
}
