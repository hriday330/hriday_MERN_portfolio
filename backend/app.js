import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.get('/', (req, res) => {
    res.send("Hello World");
    });
    
app.use("/api/v1", userRouter);