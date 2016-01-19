module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/estimate', function(req, res) {
		res.render('estimate.html');
	});
}