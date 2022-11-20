import { TicketType } from "@prisma/client";
import ticketsRepository from "@/repositories/tickets-respository";

async function getManyTicketsTypes() {
  const ticketsTypes: TicketType[] = await ticketsRepository.findMany();
  return ticketsTypes;
}

const ticketsService = {
  getManyTicketsTypes
};

export default ticketsService;
