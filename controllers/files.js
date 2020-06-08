const Upload = require("../models/file.model");

/**
 * Controllers for :
 *
 * getFiles
 * getFile,
 * createFile,
 * updateFile,
 * deleteFile
 */
class FileContoller {
  //route hancler to get all files
  getFiles(req, res) {
    let files = Upload.find();
    files.then((result) => {
      res.status(200).json({
        status: "true",
        message: "Files Found",
        data: result,
      });
    });
  }
}

module.exports = new FileContoller();
