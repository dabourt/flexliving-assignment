import mockData from "../_data/mock_reviews.json" with { type: "json" };

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    return res.status(200).json({ reviews: mockData.result || [] });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
