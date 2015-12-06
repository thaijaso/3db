var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.set('port', process.env.PORT || 8888);

require('./config/routes.js')(app);

var server = app.listen(app.get('port'), function() {
	console.log('listening on port: ', app.get('port'));
});