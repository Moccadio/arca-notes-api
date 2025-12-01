import express from "express";
import dotenv from "dotenv";
import cardRoutes from "../src/routes/cardRoute.js";


dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/cards", cardRoutes);

app.listen(3000, () => console.log("Server berjalan di port 3000"));
