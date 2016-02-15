var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport("SMTP", {
	service: "Gmail",
  	auth: {
    	XOAuth2: {
      		user: "the3dreambuilders@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      		clientId: "182170897392-2f0qpsvhgkfohc2ial7141801qmvku2i.apps.googleusercontent.com",
      		clientSecret: "CX6AFF5pNfxhonYXy-7b6VHz",
      		refreshToken: "1/3aUfOPevUSr7XXoTamVU5WDVQWSroh1jo7a6bBU4vC5IgOrJDtdun6zK6XiATCKT"
    	}
  	}
});

module.exports = (function() {
	return {
		sendEmail: function(req, res) {
			//console.log(req.body);
			var fullName = req.body.first + " " + req.body.last;
			var senderEmail = req.body.email;
			var projectName = req.body.project;
			var projectDesc = req.body.description;

			var mailOptions = {
			    from: "The3db Web Form", // sender address
			    to: 'the3dreambuilders@gmail.com', // list of receivers
			    subject: fullName + ": " + projectName, // Subject line
			    text: projectDesc + "\n" + "\n" + "Contact email: " + senderEmail  // plaintext body
			};

			// send mail with defined transport object
			smtpTransport.sendMail(mailOptions, function(error, response) {
	    		if (error) {
	        		console.log(error);
	        		res.send("Error");
	    		} else {
	    			console.log('Message sent: ' + response.message);
	    			res.render("success.html");
				}
			});
		}
	}
})();