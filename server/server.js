const app= require('./app')
const connectDatabase=require('./config/database')



PORT=5000


connectDatabase();

const server= app.listen(PORT,()=>{
    console.log(`server is working on http://localhost ${PORT}`)
})