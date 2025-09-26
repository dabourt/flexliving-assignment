import mockData from "../_data/mock_reviews.json" assert { type: "json" };
import { normalizeReviews } from "../_lib/normalize.js";

export default async function handler(req, res) {
  console.log("Mock data keys:", Object.keys(mockData));

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const normalized = normalizeReviews(mockData.result || []);
    console.log("Normalized reviews:", normalized);

    return res.status(200).json({ reviews: normalized });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: err.message });
  }
}
