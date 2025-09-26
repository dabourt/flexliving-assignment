import { Router } from "express";
import { getRawReviews } from "../services/hostawayService.js";
import { normalizeReviews } from "../utils/normalize.js";
import { readApproved, writeApproved } from "../services/approvedStore.js";

const router = Router();

// GET كل الريفيوهات
router.get("/hostaway", (req, res) => {
  const raw = getRawReviews();
  const normalized = normalizeReviews(raw);
  res.json({ reviews: normalized });
});

// GET approved reviews
router.get("/approved/full", (req, res) => {
  const raw = getRawReviews();
  const normalized = normalizeReviews(raw);
  const approvedIds = readApproved();
  const approved = normalized.filter((r) =>
    approvedIds.includes(r.reviewId.toString())
  );
  res.json({ reviews: approved });
});

// POST approve
router.post("/:id/approve", (req, res) => {
  const id = req.params.id;
  const approved = readApproved();
  if (!approved.includes(id)) approved.push(id);
  writeApproved(approved);
  res.json({ message: `Review ${id} approved`, approved });
});

// POST reject
router.post("/:id/reject", (req, res) => {
  const id = req.params.id;
  const approved = readApproved().filter((rid) => rid !== id);
  writeApproved(approved);
  res.json({ message: `Review ${id} rejected`, approved });
});

export default router;
