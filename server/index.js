
import express from "express";
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
// instead of body parser u can use express here also.

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);


const port = process.env.PORT;

Connection(); 

app.listen(port, () => console.log(`Your server is running sucessfully on PORT ${port}`));