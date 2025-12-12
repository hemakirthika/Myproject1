import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017/expense_tracker";

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: String, // "income" or "expense"
  date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend Running Successfully ✔");
});

// Add Transaction
app.post("/add", async (req, res) => {
  try {
    const { title, amount, type } = req.body;
    if (!title || !amount || !type) {
      return res.json({ success: false, message: "All fields are required!" });
    }

    const newTransaction = new Transaction({ title, amount, type });
    await newTransaction.save();
    res.json({ success: true, message: "Transaction added!" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error saving transaction" });
  }
});

// Get all transactions
app.get("/history", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
