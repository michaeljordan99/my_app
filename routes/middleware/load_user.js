var users = require('../../data/users');
var User = require('../../data/model/user');
var mongoose = require('mongoose');

function loadUser(req, res, next) {
	//var user = req.user = users[req.params.name];
	debugger;

	/* mongoose */
	mongoose.connect('mongodb://localhost:27017');
	
	var db = mongoose.connection;
	
	db.once('open', function callback(){
		console.log('mongo has opened!');
	});

	var userSchema = mongoose.Schema({
	    name: String
	});

	var myUserModel = mongoose.model('MongoUser', userSchema);

	var myUserInstance = new myUserModel({ name: 'I am an User Instance' });

	console.log(myUserInstance.name);

	myUserInstance.save(function (err, myUserInstance) {
		if (err) {
			console.log(err);
		} else {
			console.log('Check your database!')
		}
	});

	var user = req.user = new User('Joey', 'Ramone');

	if(!user){
		res.send('Not found', 404);
	} else {
		next();
	}
};

module.exports = loadUser;