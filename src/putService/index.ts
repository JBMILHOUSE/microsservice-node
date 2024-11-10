import fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import mongoose from "mongoose";
import User from "./model/user";

const app = fastify()

mongoose.connect('mongodb+srv://cc23322:rzVtPb7OVBST15YN@microsservice-nodejs.qih6u.mongodb.net/?retryWrites=true&w=majority&appName=microsservice-nodejs') 
  .then(() => console.log('PUT Service connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

interface IdParams {
  id: string;
}

interface UpdateUserPayload {
  username?: string;
  password?: string;
}
  
app.put('/:id', async (request: FastifyRequest<{Params: IdParams,  Body: UpdateUserPayload  }>, reply: FastifyReply): Promise<void> => {
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
});

app.listen({ port: 3333 }).then(() => console.log('Put Server running port: 3333'))