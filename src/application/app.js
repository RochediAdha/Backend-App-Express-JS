import express from "express";
import { publicRouter } from "../route/public-api.js";
import { privateRouter } from "../route/private-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const app = express();
app.use(express.json());

app.use(publicRouter);
app.use(privateRouter);

app.use(errorMiddleware);
