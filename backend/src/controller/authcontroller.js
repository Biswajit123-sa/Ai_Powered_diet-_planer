const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

// register user
const registerUser=async(req,res)=>{
  try {
    const{name,email,password}=req.body
    const userExist=await User.findOne({email})
    if(userExist){
      return res.status(400).json({message:"user already exists"})
    }
    const hashPassword=await bcrypt.hash(password,10)

    const user=await User.create({
      name,
      email,
      password:hashPassword
    })
    return res.status(201).json({message:"user created successfully"})
  } catch (error) {
    res.status(500).json({message:"internal server error"})
  }
} 


// login user
const loginUser=async(req,res)=>{
  try {
    const{email,password}=req.body

    const user=await User.findOne({email}).select("+password")
    if(!user){
      return res.status(401).json({message:"Invalid Credentials"})
    }

    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(401).json({message:"wrong password"})
    }

    // create token
    const token=jwt.sign({
      id:user._id
    },process.env.JWT_SECRET,{
      expiresIn:"2h"
    })
    res.status(200).json({
      message:"Login Sucessfully",
      token,
      user
    })
  } catch (error) {
    res.status(500).json({message:"internal server error"})
  }
}

module.exports={registerUser,loginUser} 