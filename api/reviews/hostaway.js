import { normalizeReviews } from "../_lib/normalize.js";
import mockData from "../_data/mock_reviews.json" assert { type: "json" };

export default function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });
  const reviews = normalizeReviews(mockData);
  return res.status(200).json({ reviews });
}
