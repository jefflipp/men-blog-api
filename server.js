var express = require( 'express' ),
	  app = express(), //call the function -> isntantiates the app
	  bodyParser = require( 'body-parser' ),
	  mongoose = require( 'mongoose' ),
	  apiRouter = require( './app/config/routes' ),
	  DB = 'mongodb://localhost:27017/men-blog'; //connects to port 27017
	  port = 3000;


//body=parser conig
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());

//connect our DB
mongoose.connect( DB );

//routes config //namespace for api
app.use( '/api', apiRouter  );

//server
app.listen(port);
console.log( 'magic is happening on port ' + port );
