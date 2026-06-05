const{GoogleGenerativeAI}=require("@google/generative-ai")
const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY_2)

const MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash']

const getChatResponse=async(prompt)=>{
  let lastError=null
  for(const modelName of MODELS){
    let attempt=0
    while(attempt<3){
      try{
        const model=genAI.getGenerativeModel({model:modelName})
        const result=await model.generateContent(prompt)
        const response=result.response.text()
        return response
      }catch(err){
        lastError=err
        const status=err.status
        console.log(`[Chat AI] Model ${modelName} attempt ${attempt+1} failed: ${status} - ${err.message?.substring(0,100)}`)
        if(status===503||status===429){
          attempt++
          if(attempt<3){
            const delay=1000*Math.pow(2,attempt) // 2s, 4s
            await new Promise(res=>setTimeout(res,delay))
          }
        }else{
          // non-retryable error (e.g. 404), try next model
          break
        }
      }
    }
  }
  console.log('[Chat AI] All models failed. Last error:', lastError?.message)
  throw new Error('All models failed or are unavailable')
}

module.exports={getChatResponse}
