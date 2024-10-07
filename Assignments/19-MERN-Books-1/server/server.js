import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";

import bookRoutes from "./routes/book.routes.js";

const app = express();

app.use(express.json(), cors('http//api/folder/data')); // middleware to use json in the request body and cors
app.use("/api", bookRoutes); //Middleware

dotenv.config();
const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => console.log("Listening on port " + PORT));
