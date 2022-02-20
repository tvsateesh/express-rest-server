const express = require('express');
const userCtrl = require('./src/controllers/user-controller.js');
const Joi = require('joi');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
	res.send('Hellow World');
});

app.get('/api/user/:email', ( req, res ) => {
	const schema = {
		email: Joi.string().min(3).required()
	};

	/*const valid =	Joi.validate(req.body, schema);
	console.log(valid);
	if ( valid.error ) {

		res.status(400).send('Error in request : ' + valid.error);
	}*/
	
	console.log("Getting the user data " + req.params.email );
	const result = userCtrl.getUser( req.params.email, (error, result ) => {
		console.log("Get data from the DB ", res);
		const data = {
			status: 200,
			data: result
		}
		res.send(data);
	});

});

app.listen(port, () => console.log(`Listening on port ${port}....`));
