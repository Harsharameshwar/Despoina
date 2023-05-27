const upload = require("../upload");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const User = require("../models/User");

dotenv.config();
router.post("/:userid", upload.single("file"), async (req, res) => {
  try {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:${process.env.PORT}/api/files/${req.file.filename}`;
    // return res.send(imgUrl);

    const user= await User.findById(req.params?.userid)
    if(!user){
      res.status(403).json({message:"User Not Found"})
    }
    else{
      const response = await User.findByIdAndUpdate(
        req.params?.userid,
        { $push: { files: imgUrl } }, // Use $push to add newData to myArray
        { new: true }
      ); 
      res.status(200).json(response._doc);
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
