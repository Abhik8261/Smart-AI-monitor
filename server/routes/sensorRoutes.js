const express= require("express")
const { createSensorData, getSensorData}=require("../controllers/sensorController")
const router=express.Router()

router.post("/sensor",createSensorData)
router.get("/sensor",getSensorData)

module.exports=router;
