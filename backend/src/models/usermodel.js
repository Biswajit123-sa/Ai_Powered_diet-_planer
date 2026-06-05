const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name must required"],
    trim:true,
    minlength:3,
    maxlength:30
  },
  email:{
    type:String,
    required:[true,"email must required"],
    unique:true,
    lowercase:true,
    trim:true,
    match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please use a valid email address",
      ],
  },
  password:{
    type:String,
    required:[true,"password must required"],
    minlength:6,
    select:false
  },
  goal:{
    type:String,
    enum:["fat_loss","muscle_gain","maintenance"],
    default:"maintenance"
  }
},{
  timestamps:true
})


module.exports=mongoose.model("User",userSchema)