var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport('smtps://thaijaso%40gmail.com:ou8inxs2ic@smtp.gmail.com');

module.exports = (function() {
	return {
		sendEmail: function(req, res) {
			console.log(req.body);
			var mailOptions = {
			    from: 'Jason Thai <thaijaso@gmail.com>', // sender address
			    to: 'thaijaso@gmail.com', // list of receivers
			    subject: 'Test', // Subject line
			    text: 'Hello world' // plaintext body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, function(error, info) {
	    		if (error) {
	        		console.log(error);
	        		res.end();
	    		} else {
	    			console.log('Message sent: ' + info.response);
	    			res.send("success");
				}
			});
		}
	}
})();