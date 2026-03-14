const axios =require("axios")
function generateSensorData(){


const data={
    deviceId:"sensor001",
    temperature: Math.floor(Math.random()*10)+25,
    humidity:Math.floor(Math.random()*20)+50
};
axios.post("http://localhost:5000/api/sensor", data)
.then(()=>{
    console.log("Sensor data sent:", data)
    
})
.catch((err)=>{
        console.log("Error sending data:", err.message)
    })


}
setInterval(generateSensorData,5000);