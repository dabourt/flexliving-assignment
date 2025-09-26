import { readApproved, writeApproved } from "../../../_lib/githubStore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });
  const { id } = req.query || {};
  if (!id) return res.status(400).json({ message: "Missing id" });

  try {
    const approved = await readApproved();
    const as = new Set((approved || []).map(String));
    as.add(String(id));
    const arr = Array.from(as);
    await writeApproved(arr);
    return res.status(200).json({ message: `Review ${id} approved`, approved: arr });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
