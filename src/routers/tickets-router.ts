import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicketsTypes, getTickets } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/", getTickets)
  .get("/types", getTicketsTypes);

export { ticketsRouter };
