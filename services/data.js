const mongoose = require('mongoose')//import mongoose
mongoose.connect('mongodb://localhost:27017/RemainderServerDb',{
  useNewUrlParser:true//coonection string
})
//model creaton

const User =mongoose.model( 'User',{
   userid : Number,
   uname: String,
   password: String,
   email:String
})
module.exports = {
    User
}