export function normalizeReviews(data) {
  return data.result.map((r) => ({
    reviewId: r.id,
    listing: r.listingName,
    guest: r.guestName,
    type: r.type,
    status: r.status,
    overallRating:
      r.rating ??
      Math.round(
        r.reviewCategory.reduce((acc, c) => acc + c.rating, 0) /
          r.reviewCategory.length
      ),
    categories: r.reviewCategory.reduce((acc, c) => {
      acc[c.category] = c.rating;
      return acc;
    }, {}),
    reviewText: r.publicReview,
    submittedAt: new Date(r.submittedAt).toISOString(),
    channel: "hostaway",
  }));
}
