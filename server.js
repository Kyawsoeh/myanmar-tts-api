const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/tts", (req, res) => {
    const { text, voice, speed, pitch } = req.body;

    if (!text) {
        return res.status(400).json({ error: "No text provided" });
    }

    res.json({
        message: "API working from GitHub deploy",
        text,
        voice,
        speed,
        pitch
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running");
});
