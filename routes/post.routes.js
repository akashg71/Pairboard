// var ObjectId = require('mongodb').ObjectID;
var router = require( 'express' ).Router();
var queries = require( '../controllers/queries.controller' );
var bodyParser = require( 'body-parser' );
const jsonParser = bodyParser.json();

// POST /posts - add a post, input data in JSON
router.post( '/posts', jsonParser, queries.addPost );

// DELETE /posts/:id - delete one post
router.delete( '/posts/:id', queries.deleteOnePost );

router.post( '/:id', queries.deletePost );

module.exports = router;
