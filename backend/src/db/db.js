const mongoose=require('mongoose')

async function ConnectDb(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Db connected")
  } catch (error) {
   console.log(error)
  }
}

module.exports=ConnectDb