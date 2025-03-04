require("dotenv").config();



const express=require('express');
const { connection } = require("./config/db");
const { employeeRouter } = require("./route/employeeRoute");

const app=express();
app.use(express.json());

app.use("/", employeeRouter);


app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log(`app is running on ${process.env.port}`);
    }catch(err){
        console.log(err);
    }
})

