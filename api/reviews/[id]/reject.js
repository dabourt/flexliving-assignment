import { readFileSync, writeFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  const filePath = path.join(process.cwd(), "backend/src/data/approved_reviews.json");

  let approved = [];
  try {
    approved = JSON.parse(readFileSync(filePath, "utf-8"));
  } catch {}

  approved = approved.filter((r) => r !== id);
  writeFileSync(filePath, JSON.stringify(approved, null, 2));

  return res.status(200).json({ success: true, approved });
}
