const express = require('express');
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })

var router = express.Router();

const courseController = require('../app/controllers/CourseController');
router.get('/create', courseController.create);
router.use('/store', urlencodedParser, courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;