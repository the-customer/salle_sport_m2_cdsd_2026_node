import { Request, Response } from "express";
import { TicketService } from "../services/ticket.service";
import { AuthenticatedRequest } from "../utils/interfaces";



export const TicketController = {
    list(req: Request, res: Response) {
        const tickets = TicketService.getAll();
        return res.status(200).json({
            success: true,
            data: tickets
        })
    },
    getTicketsByUser(req: AuthenticatedRequest, res: Response) {
        const userId = +req.user!.id;
        const allTickets = TicketService.getAll();
        const userTickets = allTickets.filter(t => t.userId === userId);
        res.status(200).json({
            count: userTickets.length,
            data: userTickets
        })
    },
    create() { },
}