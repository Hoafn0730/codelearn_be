const router = require('express').Router();
const commentController = require('~/controllers/CommentController');

router.get('/', commentController.getComments);

module.exports = router;
