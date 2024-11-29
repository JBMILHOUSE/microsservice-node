import type { FastifyRequest, FastifyReply } from "fastify";
import User from "../models/user";

interface IdParams {
   id: string;
}
  
interface UpdateUserPayload {
  username?: string;
  password?: string;
}

export const updateById = async (request: FastifyRequest<{Params: IdParams,  Body: UpdateUserPayload  }>, reply: FastifyReply): Promise<void> => {
    try {
      const { id } = request.params;
      const updateData = request.body;
  
      const updatedUser = await User.findByIdAndUpdate(id, { $set: updateData },{ new: true });
  
      if (updatedUser) {
        reply.send(updatedUser);
      } else {
        reply.status(404).send({ message: 'User não encontrado.' });
      }
    } catch (error) {
      reply.status(500).send(error);
    }
};