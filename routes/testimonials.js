var express = require('express');
var router = express.Router();
const testimonialsController = require('../controllers/testimonials/testimonials');
const { createTestimonial , updateTestimonial } = require('../middlewares/testimonialsValidations')

router.get('/', function (req, res) {
    res.send('Test');
});

/* GET testimonials by id */
//router.get('/:id',/*idAmin?  */testimonialsController.detail);

/* POST testimonials create. */
router.post('/',/*idAmin?  */ createTestimonial, testimonialsController.create);

/* DELETE testimonials by id */
//router.delete('/:id',/*idAmin?  */ testimonialsController.delete);

/* UPDATE testimonials by id */
router.put('/:id',/*idAmin?  */ updateTestimonial, testimonialsController.edit);


module.exports = router;
