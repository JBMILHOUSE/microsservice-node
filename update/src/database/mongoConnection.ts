import mongoose from "mongoose";

export const connectToMongoDB = async (): Promise<void> => {
   const MONGODB_ATLAS = "mongodb+srv://cc23322:Q4WPhCTBv4awCy2u@microsservice-nodejs.qih6u.mongodb.net/?retryWrites=true&w=majority&appName=microsservice-nodejs"

   try {
       await mongoose.connect(MONGODB_ATLAS);
       console.log('DELETE Service conectado ao MongoDB Atlas');
   } catch (error) {
       console.error('Erro na conexão do MongoDB Atlas', error)
   }
}