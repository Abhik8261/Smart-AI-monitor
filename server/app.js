const express= require('express')
const sensorRoutes=require("./routes/sensorRoutes")
const app=express();
const path=require('path')


app.use(express.json());
app.use("/api",sensorRoutes)

module.exports=app;