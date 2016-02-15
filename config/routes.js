var estimates = require("./../server/controllers/estimates_controller.js");

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/estimate', function(req, res) {
		res.render('estimate.html');
	});

	app.post('/requestEstimate', function(req, res) {
		estimates.sendEmail(req, res);
	});
}