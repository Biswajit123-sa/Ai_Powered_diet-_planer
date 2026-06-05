const{getChatResponse}=require("../utils/chat")

const chatWithAI=async(req,res)=>{
  try {
    const{message}=req.body
    const prompt=`
    You're diet assistant.

    answer breifly (max 3-4 lines).

    Question: ${message}

    Rules:
    -keep answer short
    -simple language
    -Only diet/health related
    `;

    let reply;
    try {
      reply=await getChatResponse(prompt)
    } catch (error) {
      console.log('[Chat Controller] AI generation failed:', error.message)
      return res.status(503).json({
        success:false,
        message:"AI service temporarily unavailable. Please try again in a few seconds."
      })
    }

    // limit response
    if(reply.length>500){
      reply=reply.slice(0,500)
    }

    res.status(200).json({
      success:true,
      message:"Chat response generated successfully",
      data:reply
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:"Internal server error"
    })
  }
}

module.exports={chatWithAI}
