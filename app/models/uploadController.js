const multer = require('multer');

const upload = multer({
    dest: 'public/',
});

exports.uploadImage = upload.single('photo')