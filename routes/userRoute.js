const express = require('express');
const router = express.Router();
const multer = require('multer');

const ImageModel = require('./../models/resumeModel');
const uploadController = require('./../controllers/uploadController');

// require the auth Controller for user
const {
  registerUser,
  login,
  protect,
} = require('./../controllers/authController');
const { getAllUser } = require('./../controllers/userController');

router.post('/register', registerUser);
router.post('/login', login);
router.post('/upload', protect, uploadController.uploader);

router.get('/', protect, getAllUser);

module.exports = router;
