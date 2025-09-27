import { normalizeReviews } from "../_lib/normalize.js";

export async function getMockReviews() {
  const res = await fetch('/mock_reviews.json');
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const reviews = await getMockReviews();
    const normalized = normalizeReviews(reviews || []);
    return res.status(200).json({ reviews: normalized });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
