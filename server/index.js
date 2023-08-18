require('dotenv').config();
const express = require('express');
const cors=require('cors')
const connection = require('./db');
const app=express();
const userRoutes=require('./routes/users.js');
const authRoutes=require('./routes/auth.js');


//db connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const port=process.env.PORT||8000;

app.listen(port,()=>console.log(`listening on port ${port} `));