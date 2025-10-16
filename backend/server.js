import express from "express";
import cors from "cors";
import shortenerRoutes from "./routes/shortener.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", shortenerRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Backend is now live!");
});
