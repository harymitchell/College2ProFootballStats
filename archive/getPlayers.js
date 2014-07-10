module.exports = {

getPlayers: function(team) {

    var mongoose = require('mongoose');
    var uristring = "mongodb://hary:hary1234@ds041238.mongolab.com:41238/heroku_app17130646";
    var Schema = mongoose.Schema;
    var models = require('./models');



////////////////////////////////////////////////////////

  
    models.quarterback.find({'personal.college':team},function(err, quarterbacks) {                            
	if (err) return console.error(err);
	return(quarterbacks);
      });



}//function(team)
}//exports