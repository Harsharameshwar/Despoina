const upload = require("./routes/upload");
const files=require("./routes/files")
const userRoute=require("./routes/users")
const express = require("express");
const app = express();
const authRoute=require("./routes/auth")
const dotenv=require('dotenv')
const cors = require('cors');
const mongoose = require("mongoose");
const corsOptions ={
    origin:"*", 
    credentials:true, 
}
app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());
app.set("view engine", "ejs");

mongoose.connect(process.env.DB, {useNewUrlParser: true,  useUnifiedTopology: true })
.then(console.log("Connected to mongoDB"))
.catch((err)=>{console.log(err)})


app.use("/api/file", upload);
app.use("/api/files",files);
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);



app.listen(process.env.PORT, () => {
  console.log("server started on " + 5000);
});
