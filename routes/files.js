const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const conn = require("../db");
const User = require("../models/User");
const dotenv = require("dotenv");
const fs = require("fs");
const axios = require("axios");
dotenv.config();
// init gfs

// init gfs
mongoose.set("strictQuery", true);
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "files",
  });
});

router.get("/list", (req, res) => {
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "no files exist",
      });
    }

    return res.json(files);
  });
});

// router.get("/:filename", (req, res) => {
//     const file = gfs
//       .find({
//         filename: req.params.filename
//       })
//       .toArray((err, files) => {
//         if (!files || files.length === 0) {
//           return res.status(404).json({
//             err: "no files exist"
//           });
//         }

//         gfs.openDownloadStreamByName(req.params.filename).pipe(res);
//       });
//   });

const readFileFromGridFS = (filename) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    gfs
      .openDownloadStreamByName(filename)
      .on("data", (chunk) => {
        chunks.push(chunk);
      })
      .on("error", (error) => {
        reject(error);
      })
      .on("end", () => {
        const fileBuffer = Buffer.concat(chunks);
        resolve(fileBuffer);
      });
  });
};

router.get("/:filename", async (req, res) => {
  try {
    const filename = req.params.filename;

    // Read file data from GridFS
    const fileData = await readFileFromGridFS(filename);

    // Make a POST request to Flask API
    const flaskUrl = "http://127.0.0.1:5001/upload"; // Replace with your Flask API URL

    const response = await axios.post(flaskUrl, fileData, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });

    // Handle the Flask API response
    console.log(response.data);
    res.send("File sent to Flask successfully!");
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("Error occurred while sending the file to Flask.");
  }
});

// files/del/:id
// Delete chunks from the db
router.post("/del/:id", (req, res) => {
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return res.status(404).json({ err: err.message });
    res.redirect("/");
  });
});

router.delete("/del/:filename/:userid", async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);
    if (!user) {
      res.status(403).json({ message: "User Not Found" });
    } else {
      const file = await gfs.find({ filename: req.params.filename }).toArray();
      // console.log();
      if (!file) {
        res.status(403).json({ message: "File not Found" });
      } else {
        const user = await User.findByIdAndUpdate(
          req.params.userid, // Specify the document you want to modify by its _id
          {
            $pull: {
              files: {
                $in: [
                  `http://localhost:${process.env?.PORT}/api/files/${req.params?.filename}`,
                ],
              },
            },
          }, // Use $pull to remove dataToRemove from myArray
          { new: true }
        );
        gfs.delete(file[0]?._id, (err, data) => {
          if (err) return res.status(404).json({ err: err.message });
          res.status(200).json(user);
        });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getuserfiles/:userid", async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);
    // console.log(user.files)
    res.status(200).json(user.files);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
