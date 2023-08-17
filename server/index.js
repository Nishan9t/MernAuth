require('dotenv').config();
const express = require('express');
const cors=require('cors')
const connection = require('./db');
const app=express();
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');


//db connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
api.use('/api/auth',authRoutes);

const port=process.env.PORT||8000;

app.listen(port,()=>console.log(`listening on port ${port} `));