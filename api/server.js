 import express from 'express';
 import mongoose from 'mongoose';
 import dotenv from 'dotenv';
 import cors from 'cors';
 import userRouter from './routes/userRouter.js';

 dotenv.config();

 mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log('Database is Connected'))
    .catch((e) => console.log(e));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', userRouter);