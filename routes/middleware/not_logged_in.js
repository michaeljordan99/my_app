function notLoggedIn(req, res, next) {
	debugger;
	if (!req.session.user) {
		res.send('Unauthorized', 401);
	} else {
		next();
	}
}

module.exports = notLoggedIn;