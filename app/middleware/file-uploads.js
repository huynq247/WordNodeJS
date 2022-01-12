const { json } = require('express/lib/response');
const multer = require('multer');

const MIME_TYPE_MAP ={
    'image/png': 'png',
    'image/jpeg': 'jped',
    'image/jpeg': 'jpg',
}

const fileUpload = multer({
    limits: 50000,
    storage: multer.diskStorage({
        destination: (req, res, cb)=>{
            cb(null, 'app/public/upload'); 
        },
        filename: (req, file, cb) => {
            const ext = MIME_TYPE_MAP[file.mimetype];
            console.log("file:",file);
            cb(null, 'photo' +'.' + ext);
        }
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid? null : new Error('Invalid mime type ');
        cb(error, isValid);
    }
});

module.exports = fileUpload;