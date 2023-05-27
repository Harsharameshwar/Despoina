const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    // console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    console.log(user)
    res.status(200).json("Success");
  } catch (err) {
    console.log(err);
    if (err.message) {
      res.status(500).json(err);
    } else if (err.keyValue.email) {
      res
        .status(500)
        .json({ message: `Email ${err.keyValue.email} already exists` });
    }
  }
});


//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const data = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: data,
        },
        { new: true }
      );
      res.status(200).json("Success");
    } catch (err) {
      console.log(err);
      if (err.message) {
        res.status(500).json(err);
      } else if (err.keyValue.email) {
        res
          .status(500)
          .json({ message: `Email ${err.keyValue.email} already exists` });
      } else if (err.keyValue.phone) {
        res
          .status(500)
          .json({ message: `Phone ${err.keyValue.phone} already exists` });
      }
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      res.status(400).json({ message: "User Not Found" });
    } else {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User has been deleted..." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/getallusers", async (req, res) => {
  try {
    const ulist = [];
    const users = await User.find();
    users?.map((e) => {
      const { password, ...others } = e?._doc;
      ulist.push(others);
    });
    res.status(200).json(ulist);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById( req.params.id );
    if (user === null) {
      res.status(400).json({ message: "User Not Found" });
    } else {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
