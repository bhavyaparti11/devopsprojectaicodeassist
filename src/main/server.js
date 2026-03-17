const express = require("express");
const cors = require("cors");
const path = require("path");
const { reviewCode, explainCode } = require("./ai");

const app = express();

// Enable CORS so your frontend can talk to the backend
app.use(cors());
app.use(express.json());

// Identify where your root folder is (2 levels up from src/main)
const rootDir = path.join(__dirname, "../../");

// Serve all static files from the root (CSS, images, etc.)
app.use(express.static(rootDir));

// API Route for Review
app.post("/review", async (req, res) => {
    try {
        const result = await reviewCode(req.body.code);
        res.json({ review: result });
    } catch (err) {
        console.error("AI Error:", err);
        res.status(500).json({ error: "Something went wrong with the AI" });
    }
});

// API Route for Explain
app.post("/explain", async (req, res) => {
    try {
        const result = await explainCode(req.body.code);
        res.json({ explanation: result });
    } catch (err) {
        console.error("AI Error:", err);
        res.status(500).json({ error: "Something went wrong with the AI" });
    }
});

// This is the ONLY route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(3000, () => {
    console.log("🚀 Server is running! View your site at: http://localhost:3000");
});