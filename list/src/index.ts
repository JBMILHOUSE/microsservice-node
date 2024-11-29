import dotenv from "dotenv"
import fastify from "fastify";
import { getUsers } from "./controllers/user-controller";
import { connectToMongoDB } from "./database/mongoConnection";

dotenv.config();
const app = fastify();

connectToMongoDB();

app.get('/users', getUsers);

app.listen({ port: 3002, host: "0.0.0.0" }, () => console.log('GET Service rodando na porta 3002'));