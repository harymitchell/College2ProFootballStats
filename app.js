/** 
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();
// TODO: getPlayers may not be needed anymore.
// var getPlayers = require('./getPlayers');
var mongoose = require('mongoose');
var uristring = "mongodb://hary:hary1234@ds041238.mongolab.com:41238/heroku_app17130646";
var Schema = mongoose.Schema;
var models = require('./models');

var db = mongoose.connect(uristring, function (err, res){
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '.'+err);
    } else {
        console.log ('thats right Succeeded connected to: ' + uristring);
    }
});


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var mongoose = require('mongoose');
var uristring = "mongodb://hary:hary1234@ds041238.mongolab.com:41238/heroku_app17130646";
var Schema = mongoose.Schema;
var models = require('./models');


app.get('/api', function (req, res) {
    res.send('App is running');
});

app.post('/api/players', function (req, res){    
    models.players.find({'personal.college':req.body['college']}).lean().exec(function(err, players) {
        if (err) return console.error(err);
	//var obj = JSON.parse(players);
	//console.log(typeof(obj));
	var colStyle = '<table id="tester" width="100%" border="1" cellspacing="2" cellpadding="2" position="static" border-collapse="collapse">';
//<colgroup><colwidth="100px"/><colwidth="150px"/><colwidth="150px"/><colwidth="150px"/><colwidth="150px"/></colgroup>';
	var headers='<th border="1">Name</th><th border="1">College</th><th border="1">Pos</th><th border="1">NFL Team</th>';
	var string = colStyle+headers;
	for(i=0;i<players.length;i++){
	    //console.log("\n new player");
	    var name = players[i].personal.name;
            var college = players[i].personal.college;
            var position = players[i].personal.position;
            var team = players[i].personal.team;
	    string += ("<tr class='player-data' positon='static' border='1'><td>"+name+"</td><td>"+college+"</td><td>"+position+"</td><td>"+team+"</td></tr>"+"<tr syle='display:none' class='rowhighlight'></tr><tr style='display:none' class='rowhighlight'></tr><tr style='display:none' class='rowhighlight'></tr><tr style='display:none' class='rowhighlight' id='bottomrow'></tr>");
	};
	console.log(string);
	res.send(string);
    });
});

app.post('/api/stats', function (req, res) {
//    console.log(req.body['player']+" is a "+req.body['position']);
    var player = req.body['player'];
    var position = req.body['position'];
    switch(position){

    case("QB"):
models.quarterback.findOne({'personal.name':req.body['player']}).lean().exec(function(err, stats) {
        if (err) return console.error(err);
    console.dir(stats);
    var heading2012 = "<th class='highlight'>Rating 2013</th><th class='highlight'>Yards 2013</th><th class='highlight'>Touchdowns 2013</th><th class='highlight'>Games Played 2013</th>";
    var headingCAR = "<th>Rating Career</th><th>Yards Career</th><th>Touchdowns Career</th><th>Experience</th>";
    var stats2012 = "<td>"+stats.stats2012.rating2012+"</td><td>"+stats.stats2012.yards2012+"</td><td>"+stats.stats2012.tds2012+"</td><td>"+stats.stats2012.gamesPlayed2012+"</td>" ;
    var statsCAR = "<td>"+stats.statsCarrer.rating+"</td><td>"+stats.statsCarrer.yards+"</td><td>"+stats.statsCarrer.tds+"</td><td>"+stats.statsCarrer.gamesPlayed+"</td>" ;
    res.send([heading2012,stats2012, headingCAR, statsCAR]);
    });
	break;

    case('RB'):case('FB'):
models.runningback.findOne({'personal.name':req.body['player']}).lean().exec(function(err, stats) {
        if (err) return console.error(err);
	console.dir(stats);
    var heading2012 = "<th>Carries 2013</th><th>Yards 2013</th><th>Touchdowns 2013</th><th>Fumbles 2013</th>";
    var headingCAR = "<th>Carries Career</th><th>Yards Career</th><th>Touchdowns Career</th><th>Fumbles</th>";
    var stats2012 = "<td>"+stats.stats2012.rushes2012+"</td><td>"+stats.stats2012.yards2012+"</td><td>"+stats.stats2012.tds2012+"</td><td>"+stats.stats2012.fumbles2012+"</td>" ;
    var statsCAR = "<td>"+stats.statsCarrer.rushes+"</td><td>"+stats.statsCarrer.yards+"</td><td>"+stats.statsCarrer.tds+"</td><td>"+stats.statsCarrer.fumbles+"</td>" ;
    res.send([heading2012,stats2012, headingCAR, statsCAR]);
});
	break;

    case('WR'):case('TE'):
models.receiver.findOne({'personal.name':req.body['player']}).lean().exec(function(err, stats) {
        if (err) return console.error(err);
	console.dir(stats);
    var heading2012 = "<th>Receptions 2013</th><th>Yards 2013</th><th>Touchdowns 2013</th><th>Longest 2013</th>";
    var headingCAR = "<th>Receptions Career</th><th>Yards Career</th><th>Touchdowns Career</th><th>Longest</th>";
    var stats2012 = "<td>"+stats.stats2012.receptions2012+"</td><td>"+stats.stats2012.yards2012+"</td><td>"+stats.stats2012.tds2012+"</td><td>"+stats.stats2012.longest2012+"</td>" ;
    var statsCAR = "<td>"+stats.statsCarrer.receptions+"</td><td>"+stats.statsCarrer.yards+"</td><td>"+stats.statsCarrer.tds+"</td><td>"+stats.statsCarrer.longest+"</td>" ;
    res.send([heading2012,stats2012, headingCAR, statsCAR]);
 });
	break;

    case('NT'):case('NG'):case('DT'):case('DL'):case('LB'):case('CB'):case('S'):case('DB'):case('DE'):
    models.defensiveplayers.findOne ({'personal.name':req.body['player']}).lean().exec(function(err, stats) {
        if (err) return console.error(err);
	console.dir(stats);
    var heading2012 = "<th>Interceptions 2013</th><th>Rec Fumbles 2013</th><th>Sacks 2013</th><th>Comb Tackles 2013</th>";
    var headingCAR = "<th>Interceptions Career</th><th>Rec Fumbles Career</th><th>Sacks Career</th><th>Comb Tackles Career</th>";
    var stats2012 = "<td>"+stats.stats2012.interceptions2012+"</td><td>"+stats.stats2012.recoveredFumbles2012+"</td><td>"+stats.stats2012.sacks2012+"</td><td>"+stats.stats2012.combtackles2012+"</td>" ;
    var statsCAR = "<td>"+stats.statsCareer.interceptions+"</td><td>"+stats.statsCareer.recoveredFumbles+"</td><td>"+stats.statsCareer.sacks+"</td><td>"+stats.statsCareer.combtackles+"</td>" ;
    res.send([heading2012,stats2012, headingCAR, statsCAR]);
    });
	break;

    case('PK'):
models.placeKicker.findOne ({'personal.name':req.body['player']}).lean().exec(function(err, stats) {
        if (err) return console.error(err);
	console.dir(stats);
	res.send("<td>No stats present.</td>","<td>No stats present.</td>","<td>No stats present.</td>","<td>No stats present.</td>");
    });
	break;

    case('P'):
models.punter.findOne ({'personal.name':req.body['player']}).lean().exec(function(err, stats) {
        if (err) return console.error(err);
	console.dir(stats);
	res.send("<td>No stats present.</td>","<td>No stats present.</td>","<td>No stats present.</td>","<td>No stats present.</td>");
    });
	break;
    default:
	res.send("No stats present. Player is either offensive line or benched.");
    }
    
});

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
