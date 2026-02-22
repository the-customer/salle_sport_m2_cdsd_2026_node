import { Request } from "express"

export type Role = "ADMIN" | "CASHIER" | "CONTROLLER"
export type TicketStatus = "VALID" | "USED" | "EXPIRED"


export interface Ticket {
    id: number,
    qrCode: string | number,
    status: TicketStatus,
    price: number,
    userId: number
}
export interface User {
    id: number,
    fullname: string,
    email: string,
    password: string,
    role: Role,
    isActive: boolean
}

export interface AuthenticatedRequest extends Request {
    user?: {
        id: number,
        fullname: string,
        email: string,
        role: Role,
    } | null
}