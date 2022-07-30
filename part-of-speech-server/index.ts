import express from "express";
const app = express();
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import { Response, Request, NextFunction } from "express";
import speechRouter from "./Routers/speechRouter";

dotenv.config();

//using morgan middleware
app.use(morgan(":method :url :status  :response-time ms"));

// parse application/json
app.use(bodyParser.json());

//using cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//creating server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`YOUR SERVER IS RUNNING ON PORT ${process.env.PORT} ...`);
});

//routes section
//words route
app.use(speechRouter);

//404 not found middleware
app.use((request: Request, response: Response) => {
  response.status(404).json({ page: "NOT FOUND" });
});
