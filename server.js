 const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const API_KEY = "sk-l6JvinlbAgq2ghGPd8HhginBj7ldpgTn3jPUPuxZxlleyNea";

app.post("/chat", async (req, res) => {
    try {
        const response = await fetch("https://api.gapgpt.app/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
});

app.get("/", (req, res) => {
    res.send("🚀 DeepSeek Proxy is running!");
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});