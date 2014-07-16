var mongoose = require('mongoose'),
db = mongoose.connect('mongodb://localhost/mydb'),
Schema = mongoose.Schema;
 
var Player = new Schema({
name: String,
position: String,
team: String,
college: String
});
var playerModel = mongoose.model('Player', Player);
 
var player = new playerModel();
 
player.name = 'Chad';
player.position = 'Senior Developer';
player.team = 'Falcons';
player.college = 'Georgia';

player.save(function(err) {
if (err) throw err;
});// end player.save
 
playerModel.findOne({'name': 'Chad'}, function(err, user) {
if (player != null) {
console.log('Found the User:' + player.name +'.\n He is a '+player.position+'on the '+player.team+'.\n And he went to '+player.college);

}
});

