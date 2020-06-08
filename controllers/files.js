const File = require('../models/file.model')
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
   async updateFile(req, res, next) {
                await   File.findOneAndUpdate(
                    {_id:req.params.fileId} 
                    ,req.body,
        
                    {new:true},
                    (err,id)=>{
                            if(err) return res.status(404).json({
                                error:err,
                                status:false,
                            });
                            res.json(
                            {
                                meesage:'file updated',
                                meesage:true,
                                
                            }
                             ) 
                    });
              
              
                  }

}

module.exports = new FileContoller();