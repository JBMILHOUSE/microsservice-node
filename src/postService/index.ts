import fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import mongoose from "mongoose";
import dotenv from "dotenv"
import User from "./model/user";

dotenv.config();
const app = fastify();

mongoose.connect('mongodb+srv://cc23322:rzVtPb7OVBST15YN@microsservice-nodejs.qih6u.mongodb.net/?retryWrites=true&w=majority&appName=microsservice-nodejs')
  .then(() => console.log('POST Service connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.post('/create', async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const newUser = new User(request.body);
    
    await newUser.save();
    reply.status(201).send(newUser);
    
  } catch (error) {
    reply.status(500).send(error);
  }

});

app.listen({ port: 3332 }).then(() => console.log('Post running na port: 3332'))