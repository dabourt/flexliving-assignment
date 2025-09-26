import mockData from "../../../_data/mock_reviews.json" assert { type: "json" };

let approved = [];

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const approvedSet = new Set(approved.map(String));
  const filtered = mockData.result.filter((r) =>
    approvedSet.has(String(r.id))
  );

  return res.status(200).json({ reviews: filtered });
}
