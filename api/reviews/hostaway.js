const mockData = require("./mock_reviews.json");
const { normalizeReviews } = require("../_lib/normalize.js");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const normalized = normalizeReviews(mockData.result || []);
    return res.status(200).json({ reviews: normalized });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
