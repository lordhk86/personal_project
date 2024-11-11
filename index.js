import express from "express";
import { connectToDb } from "./config/database.js";
import applicationRouter from "./router/applicationRouter.js";
import cors from 'cors';
const app = express();
const port = 9601;
app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500',
}));
app.use("/application", applicationRouter);
app.listen(port, () => {
    console.log("server is running");
    connectToDb();
});