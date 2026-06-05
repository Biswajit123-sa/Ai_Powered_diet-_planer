const express=require('express')
const cors = require('cors')
const app=express()

const authRoutes=require('./routes/authroute')
const dietRoutes=require('./routes/dietroute')
const foodRoutes=require('./routes/foodroutes')
const chatRoutes=require('./routes/chatroute')

// Enable CORS for all origins (adjust in production if needed)
app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth',authRoutes)
app.use('/api/diet',dietRoutes)
app.use('/api/food',foodRoutes)
app.use('/api/chat',chatRoutes)

module.exports=app