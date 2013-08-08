var User = function(firstName, lastName){
	
	var self = this;
	self.firstName = firstName;
	self.lastName = lastName;
	self.name = self.firstName + ' ' + self.lastName;
};

module.exports = User;