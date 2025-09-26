import express from "express";
import reviewsRouter from "./routes/reviews.js";

const app = express();
app.use(express.json());

app.use("/api/reviews", reviewsRouter);

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
