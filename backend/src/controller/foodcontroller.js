const Food=require("../models/foodmodel")

// add food
const addFood=async(req,res)=>{
  try {
    const{foodName,calories,userId}=req.body

    const food=await Food.create({
      user:userId,
      foodName,
      calories
    })
    res.status(201).json({
      message:"Food added",
      food
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}

// get all food
const getAllFood=async(req,res)=>{
  try {
    const food=await Food.find()
    res.status(200).json({
      message:"Food fetched",
      food
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}

module.exports={addFood,getAllFood}