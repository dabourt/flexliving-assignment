import axios from "axios";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://flexliving-assignment.vercel.app/api/reviews"
    : "http://localhost:3000/api/reviews";

export function getAllReviews() {
  return axios.get(`${API_BASE}/hostaway`).then((res) => res.data);
}
