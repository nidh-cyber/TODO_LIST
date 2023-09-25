import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
 

const Connection = () => {
    
    const MONGODB_URI  = `mongodb+srv://${user}:${pass}@mern-todo.rfytcsa.mongodb.net/?retryWrites=true&w=majority`;
    // const MONGODB_URI  =  'mongodb+srv://root:root@mern-todo.rfytcsa.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected sucessfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}


export default Connection;