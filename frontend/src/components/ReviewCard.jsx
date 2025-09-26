export default function ReviewCard({ review, onApprove, onReject }) {
  return (
    <div className="border p-4 mb-4 rounded shadow bg-white">
      <h2 className="text-lg font-semibold">{review.listing}</h2>
      <p>
        <strong>Guest:</strong> {review.guest}
      </p>
      <p>
        <strong>Rating:</strong> {review.overallRating}/10
      </p>
      <p>{review.reviewText}</p>
      {onApprove && onReject && (
        <div className="mt-2">
          <button
            onClick={() => onApprove(review.reviewId)}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            Approve
          </button>
          <button
            onClick={() => onReject(review.reviewId)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
