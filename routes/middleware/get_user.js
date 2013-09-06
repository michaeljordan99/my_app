var users = [{ id:1, firstName:"Michael", lastName:"Jordan" }, { id:2, firstName:"Joe", lastName:"Smith" }];

var getById = function(id) {
	for (var i = 0; i < users.length; i++) {
	  if(users[i].id === id) return users[i];
	}
};

var getLast = function() {
	return users[users.length - 1];
};

var loadUser = function(req, res, next) {

	var users = require('../../data/users');

	var user = users[req.params.name];
	
	if(user)
	{
		return user;
	}
	else
	{
		next();
	}
};

module.exports.getById = getById;
module.exports.getLast = getLast;
module.exports.loadUser = loadUser;