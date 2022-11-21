import { Enrollment, TicketType } from "@prisma/client";
import ticketsRepository from "@/repositories/tickets-respository";
import { notFoundError } from "@/errors";

async function getManyTickets() {
  const tickets = await ticketsRepository.findManyTickets();
  if (!tickets[0]) {
    throw notFoundError();
  }
  return tickets[0];
}

async function getManyTicketsTypes() {
  const ticketsTypes: TicketType[] = await ticketsRepository.findManyTicketsTypes();
  return ticketsTypes;
}

async function postTicket(tickedTypeId: number, userId: number) {
  const ticketType: TicketType = await ticketsRepository.findFristTicketType(tickedTypeId);
  const enrollment: Enrollment = await ticketsRepository.findFristEnrollmentByUserId(userId);
  if (!ticketType || !enrollment) {
    throw notFoundError();
  }
  const ticketObject = {
    tickedTypeId: ticketType.id,
    enrollmentId: enrollment.id,
    status: "RESERVED",
    updatedAt: Date.now()
  };
  //const insertTickets = await ticketsRepository.createTicket(ticketObject);
  return ticketType;
}

const ticketsService = {
  getManyTickets,
  getManyTicketsTypes,
  postTicket
};

export default ticketsService;
