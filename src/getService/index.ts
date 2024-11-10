import fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import mongoose from "mongoose";
import dotenv from "dotenv"
import User from "./model/user";

dotenv.config();
const app = fastify();

mongoose.connect('mongodb+srv://cc23322:rzVtPb7OVBST15YN@microsservice-nodejs.qih6u.mongodb.net/?retryWrites=true&w=majority&appName=microsservice-nodejs') 
  .then(() => console.log('GET Service connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.get('/users',  async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
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
  });

app.listen({ port: 3331 }).then(() => console.log('Get running na port: 3331'))