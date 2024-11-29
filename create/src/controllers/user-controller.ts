import type { FastifyRequest, FastifyReply } from "fastify";
import User from "../models/user";

export const getTest = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    return reply.send({message: "dentro do docker"});
};

export const createUser = async (request: FastifyRequest<{ Body: { username: string; password: string; }}>, reply: FastifyReply): Promise<void> => {
    try {
      const { username, password } = request.body;

      const userExits = await User.findOne({ username });
      if(userExits) {
        reply.send({ message: 'Nome de usuário já existe' })
      }

      const newUser = new User({ username, password });
      
      await newUser.save();
      reply.status(201).send(newUser);
      
    } catch (error) {
      reply.status(500).send(error);
    }
};