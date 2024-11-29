import dotenv from "dotenv"
import fastify from "fastify";
import { removeById } from "./controllers/user-controller";
import { connectToMongoDB } from "./database/mongoConnection";

dotenv.config();
const app = fastify();

connectToMongoDB();
  
app.delete('/users/:id', removeById);

app.listen({ port: 3004, host: "0.0.0.0" }, () => console.log('Delete Service rodando na port: 3004'));