import ticketsService from "@/services/tickets-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTicketsTypes(_req: Request, res: Response) {
  try {
    const ticketsType = await ticketsService.getManyTicketsTypes();
    return res.status(httpStatus.OK).send(ticketsType);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
