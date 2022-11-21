import Joi from "joi";

export const InsertTicketSchema = Joi.object<object>({
  ticketTypeId: Joi.number().required()
});
