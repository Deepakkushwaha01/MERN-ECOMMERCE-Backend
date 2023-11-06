import express from 'express';
import dotenv from 'dotenv';
import router from './Router/Routes.js';
import db from './database/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app=express();

dotenv.config();        /* env file ka data hum use kar sake pure server m */

app.use(cors({
    origin:`${process.env.FRONT_URL}` , // Allow only specific origins
    methods: ['GET','POST','DELETE','PATCH'],
    credentials: true,
}))


db();
app.use(express.json());  

app.use('/uploads',express.static('uploads'))

app.use(cookieParser());
app.use(router);


const port =process.env.PORT||8080;
app.listen(port,()=>{
    console.log("Server Successfully Started..........")
})
