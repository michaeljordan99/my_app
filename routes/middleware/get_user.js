var users = [{ id:1, firstName:"Michael", lastName:"Jordan" }, { id:2, firstName:"Joe", lastName:"Smith" }];

var getUserById = function(id) {
	for (var i = 0; i < users.length; i++) {
	  if(users[i].id === id) return users[i];
	}
};

module.exports = getUserById;