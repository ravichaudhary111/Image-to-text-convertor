const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { uploadImage, getImages } = require('../controllers/user.controler');
const auth = require('../middleware/auth.middleware');

router.post('/upload', auth, upload.single('image'), uploadImage);
router.get('/', auth, getImages);

module.exports = router;
