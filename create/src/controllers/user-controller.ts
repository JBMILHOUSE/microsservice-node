import type { FastifyRequest, FastifyReply } from "fastify";
import User from "../models/user";

export const getTest = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    return reply.send({message: "dentro do docker"});
};

export const createUser = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
      const newUser = new User(request.body);
      
      await newUser.save();
      reply.status(201).send(newUser);
      
    } catch (error) {
      reply.status(500).send(error);
    }
};