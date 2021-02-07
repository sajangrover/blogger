import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 5000;
const dbURL = process.env.dbURL

app.use('/post', postRoutes);
app.use('*' ,(req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>404 error</h1><p>Not Found!</p></body></html>');
})

mongoose.connect(dbURL, {
    useNewUrlParser : true,
    useUnifiedTopology: true 
}).then(() => {
    app.listen(port, () => {
        console.log(`server is running on port : ${port}`);
    })
}).catch((error) => {
    console.log(error);
})

