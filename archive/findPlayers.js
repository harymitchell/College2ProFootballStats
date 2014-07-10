var mongoose = require('mongoose');

var uristring = "mongodb://hary:hary1234@ds041238.mongolab.com:41238/heroku_app17130646";

var db = mongoose.connect(uristring, function (err, res){
    if (err) {
	console.log ('ERROR connecting to: ' + uristring + '.' + err);
    } else {
	console.log ('Succeeded connected to: ' + uristring);
    }
});

