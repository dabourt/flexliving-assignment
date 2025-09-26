export function normalizeReviews(rawReviews) {
  return rawReviews.map((r) => ({
    reviewId: r.id,
    listing: r.listingName,
    guest: r.guestName,
    type: r.type,
    status: r.status,
    overallRating: r.rating,
    categories: Object.fromEntries(
      (r.reviewCategory || []).map((c) => [c.category, c.rating])
    ),
    reviewText: r.publicReview,
    submittedAt: new Date(r.submittedAt).toISOString(),
    channel: "hostaway",
  }));
}
