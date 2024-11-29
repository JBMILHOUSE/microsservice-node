import type { FastifyRequest, FastifyReply } from "fastify";
import User from "../models/user";

export const getUsers = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const user = await User.find();

        if (user) {
            reply.send(user);
        } else {
            reply.status(404).send({ message: 'User não encontrado.' });
        }
    } catch (error) {
        reply.status(500).send(error);
    }
};