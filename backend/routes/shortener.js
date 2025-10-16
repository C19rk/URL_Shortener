import express from "express";
const router = express.Router();

let urls = [];

router.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const shortCode = Math.random().toString(36).substring(2, 8);
  const shortUrl = `http://localhost:5000/${shortCode}`;

  urls.push({ longUrl, shortUrl });
  res.json({ shortUrl });
});

router.get("/urls", (req, res) => {
  res.json(urls);
});

export default router;
