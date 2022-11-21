import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsTypes, getTickets, postTicket } from "@/controllers";
import { InsertTicketSchema } from "@/schemas/tickets-shcema";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/", getTickets)
  .get("/types", getTicketsTypes)
  .post("/", validateBody(InsertTicketSchema), postTicket);

export { ticketsRouter };
