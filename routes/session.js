/*
 * Session Routes
 */

var users = require('../data/users');
var notLoggedIn = require('./middleware/not_logged_in');

module.exports = function(app) {

	app.dynamicHelpers({
		session: function(req, res) {
			return req.session;
			}
		});

	app.get('/session/new', function(req, res) {
		res.render('session/new', {title: "Login"});
	});

	app.post('/session', function(req, res) {
		debugger;
		if (users[req.body.username] &&
			users[req.body.username].password === req.body.password) {
			req.session.user = users[req.body.username];
			res.redirect('/users');
		} else {
			res.render('session/new', {title: "Login", message: "In-valid Login."});
		}
	});

	app.del('/session', function(req, res, next) {
		debugger;
		req.session.destroy();
		res.redirect('/');
	});
};

