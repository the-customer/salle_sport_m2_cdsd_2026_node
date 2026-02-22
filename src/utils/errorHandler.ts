import { NextFunction, Request, Response } from "express";

export interface HttpError extends Error {
    status: number;
}

export const errorHandler = (
    err: HttpError,
    _req: Request,
    res: Response,
    _next: NextFunction) => {
    console.log(err)
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || 'Internal server error!'
    })
}