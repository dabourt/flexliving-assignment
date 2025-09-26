let approved = [];

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!approved.includes(id)) {
    approved.push(id);
  }

  return res.status(200).json({ message: `Review ${id} approved`, approved });
}
