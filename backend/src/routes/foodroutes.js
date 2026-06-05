const express=require('express')
const router=express.Router()

const{addFood,getAllFood}=require('../controller/foodcontroller')

router.post('/add',addFood)
router.get('/get',getAllFood)

module.exports=router