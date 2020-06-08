const File = require('../models/file.model');
const Util = require('../utils/errorResponse');
const multer = require('multer');
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
     static updateFile(req, res, next){

        

        const { cloud_id } = req.params;
        console.log('good')
        const { file } = req;
        console.log('uploads/'+file.filename);
        if(!file){
            return res.status(422).json({
                message: 'An Error Occured, File is Undefined'
            });
        }else{
            File.findById(cloud_id).then( fileDetail => {
                fileDetail.fileURL = 'uploads/'+file.filename;
                fileDetail.title = file.fieldname;
                fileDetail.save().then( updated => {
                    return res.status(201).json({
                        message: 'File Updated',
                        statusCode: 200
                    })
                }).catch( err => {
                    Util.appError(err, next);
                })
            }).catch( err => {
                Util.appError(err, next);
            })
        }
            
     }

}

module.exports =  FileContoller;
