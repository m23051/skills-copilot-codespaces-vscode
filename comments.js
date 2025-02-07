// Create web server
// Create an express router
const express = require('express');
const router = express.Router();

// Import the comments controller
const commentsCtrl = require('../controllers/comments');

// Define the routes
router.get('/', commentsCtrl.index);
router.get('/new', commentsCtrl.new);
router.post('/', commentsCtrl.create);
router.get('/:id', commentsCtrl.show);
router.delete('/:id', commentsCtrl.delete);

// Export the router
module.exports = router;