const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  foodName:{
    type:String,
    required:true,
  },
  calories:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now,
  }
},{timestamps:true})

module.exports=mongoose.model("Food",foodSchema)