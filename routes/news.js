var express = require('express');
var router = express.Router();
const newsController = require('../controllers/news/news');
const newsValidations = require('../middlewares/newsValidations')

/* router.get('/', function (req, res) {
    res.send('Test');
});
 */

/* POST news create. */
router.post('/',/*idAmin?  */ newsValidations, newsController.create);


module.exports = router;
