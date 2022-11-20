import { prisma } from "@/config";

async function findManyTickets() {
  return prisma.ticket.findMany();
}

async function findManyTicketsTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  findManyTickets,
  findManyTicketsTypes
};

export default ticketsRepository;
