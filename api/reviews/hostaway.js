import mockData from "../_data/mock_reviews.json" assert { type: "json" };
import { normalizeReviews } from "../_lib/normalize.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const normalized = normalizeReviews(mockData.result || []);
    return res.status(200).json({ reviews: normalized });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
