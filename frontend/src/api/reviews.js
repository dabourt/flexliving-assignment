import axios from "axios";

const API_BASE = "https://flex-living-backend-65.vercel.app/api/reviews";

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
