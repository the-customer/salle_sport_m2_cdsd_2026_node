import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller";
import { UserController } from "../controllers/user.controller";

const router = Router();

// router.get('/', TicketController.list);
/** 
 * GET /api/tickets/users/:id
*/
router.get('/', TicketController.getTicketsByUser);



export default router;