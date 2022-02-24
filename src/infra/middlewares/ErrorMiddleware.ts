import { ServerError } from "@errors/Error";
import { Request, Response, NextFunction } from "express";

function ErrorMiddleware(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) {
    if (err instanceof ServerError) {
        return res.status(err.statusCode).json({
            status: "error",
            statusCode: err.statusCode,
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        statusCode: 500,
        message: `Internal server error - ${err.message}`,
    });
}

export { ErrorMiddleware };
