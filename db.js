const mongoose = require("mongoose");
const dotenv=require("dotenv")
dotenv.config();



const conn = mongoose.createConnection(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  },(err)=>{if(err){
    console.log("Not Connected")
  }
  else{
    console.log("Connected")
  }});

module.exports=conn