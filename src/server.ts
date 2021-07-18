import * as dotenv from 'dotenv';
import './database/index';
import express from 'express';
import cors from 'cors';
import route from './routes/routes';
import { errorMiddleware } from './app/middlewares/error';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(route);
app.use(errorMiddleware);

app.listen(5000, () => console.log('Server on.'));
