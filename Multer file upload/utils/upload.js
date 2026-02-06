const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure the 'uploads' directory exists
    cb(null, './uploads/'); 
  },
  filename: function (req, file, cb) {
    // Create a unique filename with the original extension
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload middleware
const upload = multer({
  storage: storage,
  // limits: { fileSize: 1000000 }, // Optional: limit file size to 1MB
  fileFilter: function(req, file, cb){
    // Optional: Filter file types
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if(mimetype && extname){
      return cb(null,true);
    }
    cb(new Error('Only images are allowed (jpeg, jpg, png, gif)'));
  }
}).single('profileImage'); // 'profileImage' is the name of the form field

module.exports = upload;
