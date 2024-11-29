import type { FastifyRequest, FastifyReply } from "fastify";
import User from "../models/user";

interface IdParams {
   id: string;
}

export const removeById = async (request: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply): Promise<void> => {
    try {
      const { id } = request.params;

      const result = await User.findByIdAndDelete(id);
      if (result) {
        reply.status(204).send(); 
      } else {
        reply.status(404).send({ message: 'User não encontrado.' });
      }
    } catch (error) {
      reply.status(500).send(error);
    }
};