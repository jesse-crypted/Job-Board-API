const multer = require('multer');

const ImageModel = require('./../models/resumeModel');

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('testImage');

exports.uploader = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new ImageModel({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: 'image/png',
        },
      });
      newImage
        .save()
        .then(() => res.send('successfully uploaded'))
        .catch((err) => console.log(err));
    }
  });
};
