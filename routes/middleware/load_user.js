var users = require('../../data/users');
var User = require('../../data/model/user')

function loadUser(req, res, next) {
	//var user = req.user = users[req.params.name];
	debugger;
	var user = req.user = new User('Joey', 'Ramone');
	console.log(user);
	if(!user){
		res.send('Not found', 404);
	} else {
		next();
	}
};

module.exports = loadUser;