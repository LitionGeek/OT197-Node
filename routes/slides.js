const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getSlides, uploadImage, getOneSlide } = require('../controllers/slides/slides');
const { validationBody } = require('../middlewares/validationSlide');

const storage = multer.memoryStorage({
    destination:function(req,res,callback){
        callback(null,'');
    }
});

const upload = multer({storage}).single('image');

router.post('/',[upload,validationBody],uploadImage);
router.get('/',getSlides);
router.get('/:id',getOneSlide);

module.exports = router;