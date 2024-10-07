import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/mongoose.config.js";

import bookRoutes from "./routes/book.routes.js";

const app = express();

app.use(express.json(), cors({origin: "http://localhost:5173"})); // middleware to use json in the request body and cors
app.use("/api", bookRoutes); //Middleware

dotenv.config();
const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => console.log("Server is Running on port: " + PORT));