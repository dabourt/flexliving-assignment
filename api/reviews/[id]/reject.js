import { readApproved, writeApproved } from "../../../_lib/githubStore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });
  const { id } = req.query || {};
  if (!id) return res.status(400).json({ message: "Missing id" });

  try {
    const approved = await readApproved();
    const filtered = (approved || []).map(String).filter(x => x !== String(id));
    await writeApproved(filtered);
    return res.status(200).json({ message: `Review ${id} rejected`, approved: filtered });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
