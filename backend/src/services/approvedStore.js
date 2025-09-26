import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, "../data/approved_reviews.json");

export function readApproved() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

export function writeApproved(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
