import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, "../data/mock_reviews.json");
export function getRawReviews() {
  const raw = fs.readFileSync(filePath);
  return JSON.parse(raw);
}
