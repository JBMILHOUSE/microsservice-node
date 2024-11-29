import dotenv from "dotenv"
import fastify from "fastify";
import { connectToMongoDB } from "./database/mongoConnection";
import { createUser, getTest } from "./controllers/user-controller";

dotenv.config();
const app = fastify();

// conexão ao mongo
connectToMongoDB();

app.get('/', getTest);
app.post('/users', createUser);

app.listen({ port: 3001, host: "0.0.0.0" }, () => console.log("POST Service rodando na porta: 3001"))