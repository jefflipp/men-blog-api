var express = require('express'),
    apiRouter = express.Router(),
    articlesController = require('../controllers/article'),
    Article = require('../models/article');

//always reference model in the singular, controllers in the plural

apiRouter.route('/articles')
    .post(function(req, res){
        console.log(req.body);
    })

module.exports = apiRouter;