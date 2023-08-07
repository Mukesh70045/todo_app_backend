import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/ToDoroutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.uri)
    .then(() => {
        console.log('Connected to MongoDB Atlas');


    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/', router);

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
});
