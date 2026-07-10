const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

app.use(cors({
  origin: 'https://s75577947-droid.github.io',
  credentials: true
}));

app.use(express.json());

const API_KEY = 'sk-l6JvinlbAgq2ghGPd8HhginBj7ldpgTn3jPUPuxZxlleyNea';

app.post('/chat', async (req, res) => {
    try {
        const response = await fetch('https://api.gapgpt.app/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('🚀 DeepSeek Proxy is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});