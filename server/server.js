require("dotenv").config();

const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "https://build-wise-ai-two.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 BuildWise AI Backend is Running!",
  });
});

// AI Routes
app.use("/api", aiRoutes);

const PORT = process.env.PORT || 5000;

console.log(
  "API Key Loaded:",
  process.env.OPENROUTER_API_KEY ? "YES" : "NO"
);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});