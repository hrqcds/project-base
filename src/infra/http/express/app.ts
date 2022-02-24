import "dotenv/config";
import "express-async-errors";
import { ServerError } from "@errors/Error";
import { ErrorMiddleware } from "@middlewares/ErrorMiddleware";
import express from "express";

const app = express();

app.get("/", () => {
    throw new ServerError("teste");
});

app.use(express.json());
app.use(ErrorMiddleware); // Recebe as exceções (throws) do sistema

export { app };
