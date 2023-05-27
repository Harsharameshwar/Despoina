const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const sign = require("jsonwebtoken").sign;


router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email,status: "Active"  });
        if(!user){
            return res.status(400).json({message:"Wrong credentials!"})
      }
      else{
          const validated = await bcrypt.compare(req.body.password, user.password);
          if(!validated){
            return res.status(400).json({message:"Wrong credentials!"});
          }
          else{
              const { password, ...others } = user._doc;
              const token = sign(
                {
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
                  user: others,
                },
                process.env.SECRET
              );
          
               res.status(200).json({ token:token,user:others});
              
          }
      
      }
  
      } catch (err) {
        console.log(err)
       return res.status(500).json(err);
      }
  });




module.exports=router