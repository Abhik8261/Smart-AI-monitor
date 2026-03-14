const mongoose=require("mongoose")
const sensorSchema= new mongoose.Schema({

    deviceId:{
        type:String, 
        required: true
    }, 
    temperature:{
        type:Number,
        required: true
    },
    humidity:{
        type:Number,
        required: true
    }
})
module.exports= mongoose.model("SensoData", sensorSchema)