import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Change PORT to safe value
const PORT = 5000;

const MONGO_URL = "mongodb://127.0.0.1:27017/expense_tracker";

// MongoDB connection (correct format)
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// Routes test
app.get("/", (req, res) => {
  res.send("Backend Running Successfully ✔");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
