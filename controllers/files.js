const File = require("./../models/file.model");
const response = require("./../utils/response");
const CustomError = require("./../utils/CustomError");

/**
 * Controllers for :
 * 
 * getFiles
 * getFile,
 * createFile,
 * updateFile,
 * deleteFile
 */

//class FileContoller {
// Add file
exports.createFile = (req, res) => {
  if (typeof req.file == "undefined") {
    return res.status(400).json({
      status: false,
      message: 'Please select a file'
    })
  } else {
    const file = new File({
      title: req.file.filename,
      fileURL: req.file.path
    });
    file.save()
      .then((result) => {
        const response = {
          status: true,
          message: 'File uploaded.'
        }
        res.status(201).json(result)
      }).catch((err) => {
        res.status(400).json(err)
      });
  }
};

// Get one file
exports.getFile = async (req, res) => {
  await File.findOne({
    _id: req.params.fileId
  }, (err, file) => {
    if (err) throw new CustomError("Error occured while retriving files");

    if (!file)
      return res.status(404).json(response("File Not Found", null, false));

    res.status(200).json(response("File Found", file, true))
  })
}

//route handler to get all files
exports.getFiles = async (req, res) => {
  let files = await File.find({});

  if (!files)
    return res.status(200).json(response("No Files Found", files, true));

  return res.status(200).json(response("All Files Found", files, true));
}


exports.deleteFile = async (req, res) => {
  const file = await File.deleteOne({
    _id: req.params.id
  }, (err, file) => {
    if (err) throw new CustomError("Error occured while deleting file");
    if (!file)
      return res.status(404).json(response("File Not Found", null, false));

    res.status(200).json(response("File Deleted", null, true));
  });
}


exports.updateFile = async (req, res) => {
  // Add file path to request body
  if (req.file) req.body["fileURL"] = req.file.path

  const file = await File.findOneAndUpdate({
      _id: req.params.fileId
    },
    req.body, {
      new: true
    },
    (err, file) => {
      if (err) throw new CustomError("Error: File could not be updated");

      if (!file)
        return res.status(404).json(response("File with ID not found", null, false));

      res.status(200).json(response("File updated successfully", file, true));
    })
}
//}

//module.exports = new FileContoller();