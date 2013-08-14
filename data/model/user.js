var User = function(firstName, lastName){
	
	var self = this;

	self.firstName = firstName;
	self.lastName = lastName;
	self.name = self.firstName + ' ' + self.lastName;
	self.username = firstName;
	self.bio = "hi from user bio";
	self.password = 1;
};

module.exports = User;

