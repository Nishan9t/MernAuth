require('dotenv').config();
const express = require('express');
const cors=require('cors')
const connection = require('./db');
const app=express();


//db connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

const port=process.env.PORT||8000;

app.listen(port,()=>console.log(`listening on port ${port} `));