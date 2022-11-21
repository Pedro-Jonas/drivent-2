import { prisma } from "@/config";
import { InsertTicket } from "@/protocols";

async function findManyTickets() {
  return prisma.ticket.findMany({
    include: {
      TicketType: true,
    },
  });
}

async function findManyTicketsTypes() {
  return prisma.ticketType.findMany();
}

async function findFristTicketType(id: number) {
  return prisma.ticketType.findFirst({
    where: { id }
  });
}

async function findFristEnrollmentByUserId(userId: number) {
  return prisma.enrollment.findFirst({
    where: { userId },
  });
}

//async function createTicket(obj : InsertTicket) {
// return prisma.ticket.create({
// data: {
//    obj
// }
//});

const ticketsRepository = {
  findManyTickets,
  findManyTicketsTypes,
  findFristTicketType,
  findFristEnrollmentByUserId,
  //createTicket
};

export default ticketsRepository;
