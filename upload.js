const {
    GridFsStorage
  } = require("multer-gridfs-storage");
const multer = require("multer");
const path = require("path");
const dotenv=require('dotenv')
dotenv.config();

const storage = new GridFsStorage({
    url: process.env.DB,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        var filename;
          filename = `${Date.now()}files${file?.originalname}`;
          const fileInfo = {
            filename: filename,
            bucketName: "files"
          };
          resolve(fileInfo);
          return filename
        });
    }
  });
  
module.exports = upload = multer({
    storage
  });
  