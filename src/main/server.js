const express = require("express");
const { reviewCode, explainCode } = require("./ai");

const app = express();
app.use(express.json());

// Review API
app.post("/review", async (req, res) => {
    try {
        const result = await reviewCode(req.body.code);
        res.json({ review: result });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Explain API
app.post("/explain", async (req, res) => {
    try {
        const result = await explainCode(req.body.code);
        res.json({ explanation: result });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.get("/", (req, res) => {
    res.send("AI Code Assist Running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));