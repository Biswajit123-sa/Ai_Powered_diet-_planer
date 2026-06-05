const express=require('express')
const app=express()

const authRoutes=require('./routes/authroute')
const dietRoutes=require('./routes/dietroute')
const foodRoutes=require('./routes/foodroutes')
const chatRoutes=require('./routes/chatroute')

app.use(express.json())

// routes
app.use('/api/auth',authRoutes)
app.use('/api/diet',dietRoutes)
app.use('/api/food',foodRoutes)
app.use('/api/chat',chatRoutes)

module.exports=app