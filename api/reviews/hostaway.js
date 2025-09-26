import mockData from "../../backend/src/data/mock_reviews.json" assert { type: "json" };

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  return res.status(200).json({ reviews: mockData.result });
}
