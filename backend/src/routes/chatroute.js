const express=require('express')
const router=express.Router()

const{chatWithAI}=require('../controller/chatcontroller')

router.post('/',chatWithAI)

module.exports=router