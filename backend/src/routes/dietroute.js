const express=require('express')
const router=express.Router()

const{generateDiet}=require('../controller/dietcontroller')

router.post('/generate',generateDiet)

module.exports=router