import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const filePath = path.join(process.cwd(), "backend/src/data/approved_reviews.json");
    const approved = JSON.parse(readFileSync(filePath, "utf-8"));
    return res.status(200).json(approved);
  } catch (err) {
    console.error(err);
    return res.status(200).json([]); // fallback لو مفيش داتا
  }
}
