import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export const AuthController = {
    login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body as { email: string; password: string };
            //appel du service pour recuperer l'utilisateur avec ces credentials
            const result = AuthService.login(email, password);
            return res.json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    },
    logout(req: Request, res: Response, next: NextFunction) { },
    refresh(req: Request, res: Response, next: NextFunction) { },
    me(req: Request, res: Response, next: NextFunction) { },
}