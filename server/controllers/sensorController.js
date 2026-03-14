const SensorData= require("../models/sensormodel.js")


exports.createSensorData= async(req, res)=>{
    try {
        const {deviceId, temperature, humidity}=req.body;

const data=await SensorData.create({
    deviceId,
    temperature,
    humidity
})
res.status(201).json({
    succes:true,
    data
})
        
    } catch (error) {
        res.status (500).json({
            succes:false,
            message:error.message
        })
    }
};

exports.getSensorData=async(req,res)=>{
    try {
        const data=await SensorData.find().sort({timestamp:-1});
        res.status(200).json({
            succes:true,
            data
        })
        
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:error.message
        })
    }
}