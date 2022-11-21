import { AuthenticatedRequest } from "@/middlewares";
import ticketsService from "@/services/tickets-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTickets(_req: Request, res: Response) {
  try {
    const tickets = await ticketsService.getManyTickets();
    return res.status(httpStatus.OK).send(tickets);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getTicketsTypes(_req: Request, res: Response) {
  try {
    const ticketsType = await ticketsService.getManyTicketsTypes();
    return res.status(httpStatus.OK).send(ticketsType);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function postTicket(_req: AuthenticatedRequest, res: Response) {
  const ticketTypeId = _req.body.ticketTypeId;
  if (!ticketTypeId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const userId: number = _req.userId;
  try {
    const ticket = await ticketsService.postTicket(ticketTypeId, userId);
    return res.status(httpStatus.CREATED).send(ticket);
  } catch (error) {
    if ( error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
