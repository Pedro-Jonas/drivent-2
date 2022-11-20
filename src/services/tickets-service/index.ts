import { Ticket, TicketType } from "@prisma/client";
import ticketsRepository from "@/repositories/tickets-respository";

async function getManyTickets() {
  const tickets = await ticketsRepository.findManyTickets();
  return tickets;
}

async function getManyTicketsTypes() {
  const ticketsTypes: TicketType[] = await ticketsRepository.findManyTicketsTypes();
  return ticketsTypes;
}

const ticketsService = {
  getManyTickets,
  getManyTicketsTypes
};

export default ticketsService;
