const Express = require('express')
const logger = require('morgan')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
const apiRouter = require('./api_routes') // # 9,, seperate routers, with this call for inject from DIY middleware, vs  apiRouter = express.Router() 
const app = Express()
const path = require('path')
const port = process.env.PORT || 1337

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) // Allow all URL-encoded to be parsed
app.use(Express.static(path.join(__dirname, './public'))) // serv '/' GET to ./public




mongoose.connect('mongodb://localhost/musicians', 
  function (error) {
    if (error) {
      console.log(error)
    } else {
      console.log("Connection completed to Mongoose")
    }
  }
)

// connect wtih apiRouter #10 
app.use('/api/v1', apiRouter)

// Server Listening on port 
app.listen(port, function(err){
  if(err){
    console.log("Port Listening error ", err)
  } else {
    console.log("Port is listening on port : " + port)
  }

})