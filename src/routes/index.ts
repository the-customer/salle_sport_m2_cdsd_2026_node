import { Router } from "express";
import ticketRoutes from "./ticket.routes";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";



//TODO : add other router here : customers, tickets, payments, users,....

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/tickets', ticketRoutes);

export default router;