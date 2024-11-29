import dotenv from "dotenv";
import fastify from "fastify";
import { updateById } from "./controllers/user-controller";
import { connectToMongoDB } from "./database/mongoConnection";

dotenv.config();
const app = fastify();

connectToMongoDB();
  
app.put('/users/:id', updateById);

app.listen({ port: 3003, host: "0.0.0.0" }, () => console.log('PUT Service rodando na port: 3003'));