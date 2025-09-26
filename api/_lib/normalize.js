export function normalizeReviews(data) {
  // data is the raw Hostaway-like JSON object
  return (data.result || []).map((r) => {
    const categories = (r.reviewCategory || []).reduce((acc, c) => {
      acc[c.category] = c.rating;
      return acc;
    }, {});
    const overall =
      r.rating ??
      ((r.reviewCategory && r.reviewCategory.length)
        ? Math.round(r.reviewCategory.reduce((s, c) => s + c.rating, 0) / r.reviewCategory.length)
        : null);

    return {
      reviewId: r.id,
      listing: r.listingName,
      guest: r.guestName,
      type: r.type,
      status: r.status,
      overallRating: overall,
      categories,
      reviewText: r.publicReview,
      submittedAt: new Date(r.submittedAt).toISOString(),
      channel: "hostaway"
    };
  });
}
