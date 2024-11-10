import fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import mongoose from "mongoose";
import dotenv from "dotenv"
import User from "./model/user";

dotenv.config();
const app = fastify();

mongoose.connect('mongodb+srv://cc23322:rzVtPb7OVBST15YN@microsservice-nodejs.qih6u.mongodb.net/?retryWrites=true&w=majority&appName=microsservice-nodejs') 
  .then(() => console.log('DELETE Service connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

interface IdParams {
  id: string;
}
  
app.delete('/:id',  async (request: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply): Promise<void> => {
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
  });

app.listen({ port: 3334 }).then(() => console.log('Delete running na port: 3334'))