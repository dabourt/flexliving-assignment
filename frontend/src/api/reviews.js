import axios from "axios";
import mockData from "./mock_reviews.json" assert { type: "json" }; // <-- move mock_reviews.json here
import { normalizeReviews } from "../../_lib/normalize.js";

const API_BASE =
  import.meta.env.MODE === "production"
    ? "/api/reviews"
    : "http://localhost:3000/api/reviews";

export function getAllReviews() {
  return axios.get(`${API_BASE}/hostaway`).then((res) => res.data);
}

export function getApprovedReviews() {
  return axios.get(`${API_BASE}/approved/full`).then((res) => res.data);
}

export function approveReview(id) {
  return axios.post(`${API_BASE}/${id}/approve`).then((res) => res.data);
}

export function rejectReview(id) {
  return axios.post(`${API_BASE}/${id}/reject`).then((res) => res.data);
}

export default async function handler(req, res) {
  // ...existing code...
}
