const multer = require('multer');

const multerConfig = () => {
    const storage = multer.diskStorage({
        destination: (cb, file, req) => {
            cb(null, 'files')
        },
        filename: (cb, file, req) => {
            cb(null, new Date().toISOString() + '-' + file.originalname);
        }
    })
    multer({ storage: storage}).single('file');
}

exports.module = multerConfig;