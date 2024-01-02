import express, { urlencoded } from 'express';
import { Connection } from './connection/db.js';
import { route } from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use(cookieParser());
app.use('/',route);
Connection();
app.listen(PORT,()=>console.log(`server is running at ${PORT}`));


