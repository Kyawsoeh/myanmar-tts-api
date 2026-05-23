const express = require("express");
const edgeTTS = require("edge-tts");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

app.post("/api/tts", async (req, res) => {
    try {
        const { text, voice, speed, pitch } = req.body;

        const outputFile = "output.mp3";

        await edgeTTS.save({
            text: text,
            voice: "my-MM-NilarNeural",
            file: outputFile
        });

        res.sendFile(path.join(__dirname, outputFile));

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "TTS failed" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running");
});
