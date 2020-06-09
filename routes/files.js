const express = require('express');
const multer = require('multer');

const {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile
} = require('../controllers/files');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads')
  },
  filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
  }
})

const uploadMulter = multer({ storage: storage});


// router.post("/", createFile);
// router.get("/", getFiles);
// router.get("/:fileId",multer, getFile);
router.post("/:fileId", uploadMulter.single('upload'), updateFile);
// router.delete("/:fileId", deleteFile);



module.exports = router;
