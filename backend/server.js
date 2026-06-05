require('dotenv').config()
const app=require('./src/app')
const ConnectDb = require('./src/db/db')

ConnectDb()

app.listen(process.env.PORT,async()=>{
  console.log(`Server's running on port ${process.env.PORT}`)
})
