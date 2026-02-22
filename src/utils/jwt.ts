import * as jwt from "jsonwebtoken"
import { JwtPayload } from "jsonwebtoken"
import { Role } from "./interfaces";
import { env } from "../config/env";

export interface AuthTokenPayload extends JwtPayload {
    id: number;
    role: Role;
}
export const signToken = (payload: AuthTokenPayload): string => {
    return jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.expiresIn })
}

export const verifyToken = (token: string): AuthTokenPayload => {
    return jwt.verify(token, env.jwt.secret) as AuthTokenPayload;
}