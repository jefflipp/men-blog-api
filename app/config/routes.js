var express = require('express'),
    apiRouter = express.Router(),
    articlesController = require('../controllers/article'),
    Article = require('../models/article');

//always reference model in the singular, controllers in the plural

apiRouter.route('/articles')
    .post(function(req, res){
       //creates an instance of article with request body (req body comes from our form)
       var article = new Article( req.body )
        //save the article, handle errors
        article.save(function(err){
        	if (err) {console.log('not able to create article because : ', err)}
       
       		res.json({message: 'Article was successfully created' });
        })
    });

module.exports = apiRouter;