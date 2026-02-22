import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest, Role } from "../utils/interfaces";


export const requireRole = (...roles: Role[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role as Role)) return res.status(403).json({
            error: "You cannot do this with your role! (Forbidden)"
        })
        next()
    }
}

