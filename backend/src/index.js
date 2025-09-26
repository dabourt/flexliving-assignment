import express from "express";
import reviewsRouter from "./routes/reviews.js";

const app = express();
app.use(express.json());

app.use("/api/reviews", reviewsRouter);

// Render (or any hosting) provides PORT in env vars
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
