const Diet=require("../models/dietmodel")
const{getDietResponse}=require("../utils/diet")

const generateDiet=async(req,res)=>{
  try {
    const{goal,weight,height,age,gender,userId}=req.body

    const prompt=`Create a simple 1-day Indian diet plan.
    User:
    -Goal: ${goal}
    -Weight: ${weight}kg
    -Height: ${height}cm
    -Age: ${age}
    -Gender: ${gender}

    output:
    -calories
    -breakfast
    -lunch
    -dinner

    Rules:
    -keep it short
    -under 150 words
    -simple and affordable
    `

    // ai response
    let aiResponse;
    try {
      aiResponse=await getDietResponse(prompt)
    } catch (error) {
      console.log('[Diet Controller] AI generation failed:', error.message)
      return res.status(503).json({
        success:false,
        message:"AI service temporarily unavailable. Please try again in a few seconds."
      })
    }

    // limit response
    if(aiResponse.length>1000){
      aiResponse=aiResponse.slice(0,1000)
    }

    // save in db
    const diet=await Diet.create({
      user:userId,
      goal,
      weight,
      height,
      age,
      gender,
      dietPlan:aiResponse,
      aiSource:"gemini"
    })

    res.status(200).json({
      success:true,
      message:"Diet plan generated successfully",
      data:diet
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:"Internal server error"
    })
  }
}

module.exports={generateDiet}