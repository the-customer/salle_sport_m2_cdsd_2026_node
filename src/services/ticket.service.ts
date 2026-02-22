import { tickets } from "../data/ticket.data";
import { Ticket } from "../utils/interfaces";



export const TicketService = {
    getAll() {
        return [...tickets];
    }
}