const express = require('express')
const logger = require('morgan')
const bodyParser = require ('body-parser')
const port = process.env.PORT || 1337
const mongoose = require('mongoose')
const apiRouter = require('./api_routes') // # 9,, seperate routers, with this call for inject from DIY middleware, vs  apiRouter = express.Router() 
const app = express()

app.use(logger('dev'))
app.use(bodyParser())



mongoose.connect('mongodb://localhost/musicians', 
  function (error) {
    if (error) {
      console.error(error)
    } else {
      console.log("Connection completed to Mongoose")
    }
  }
)

// connect wtih apiRouter #10 
app.use('/api/v1', apiRouter)

// Server Listening on port 
app.listen(port, function(error){
  if(error){
    console.error("Port Listening error ", error)
  } else {
    console.log("Port is listening on port : " + port)
  }

})