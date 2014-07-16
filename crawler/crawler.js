// Modules
var stats = require("./get_stats");
 cheerio = require('cheerio'),
 request = require('request'),
 mongoose = require('mongoose'),
 teams = '<option value="http://espn.go.com/nfl/team/roster/_/name/ari/arizona-cardinals">Arizona Cardinals</option><option value="http://espn.go.com/nfl/team/roster/_/name/atl/atlanta-falcons">Atlanta Falcons</option><option value="http://espn.go.com/nfl/team/roster/_/name/bal/baltimore-ravens">Baltimore Ravens</option><option value="http://espn.go.com/nfl/team/roster/_/name/buf/buffalo-bills">Buffalo Bills</option><option value="http://espn.go.com/nfl/team/roster/_/name/car/carolina-panthers">Carolina Panthers</option><option value="http://espn.go.com/nfl/team/roster/_/name/chi/chicago-bears">Chicago Bears</option><option value="http://espn.go.com/nfl/team/roster/_/name/cin/cincinnati-bengals">Cincinnati Bengals</option><option value="http://espn.go.com/nfl/team/roster/_/name/cle/cleveland-browns">Cleveland Browns</option><option value="http://espn.go.com/nfl/team/roster/_/name/dal/dallas-cowboys">Dallas Cowboys</option><option value="http://espn.go.com/nfl/team/roster/_/name/den/denver-broncos">Denver Broncos</option><option value="http://espn.go.com/nfl/team/roster/_/name/det/detroit-lions">Detroit Lions</option><option value="http://espn.go.com/nfl/team/roster/_/name/gb/green-bay-packers">Green Bay Packers</option><option value="http://espn.go.com/nfl/team/roster/_/name/hou/houston-texans">Houston Texans</option><option value="http://espn.go.com/nfl/team/roster/_/name/ind/indianapolis-colts">Indianapolis Colts</option><option value="http://espn.go.com/nfl/team/roster/_/name/jac/jacksonville-jaguars">Jacksonville Jaguars</option><option value="http://espn.go.com/nfl/team/roster/_/name/kc/kansas-city-chiefs">Kansas City Chiefs</option><option value="http://espn.go.com/nfl/team/roster/_/name/mia/miami-dolphins">Miami Dolphins</option><option value="http://espn.go.com/nfl/team/roster/_/name/min/minnesota-vikings">Minnesota Vikings</option><option value="http://espn.go.com/nfl/team/roster/_/name/ne/new-england-patriots">New England Patriots</option><option value="http://espn.go.com/nfl/team/roster/_/name/no/new-orleans-saints">New Orleans Saints</option><option value="http://espn.go.com/nfl/team/roster/_/name/nyg/new-york-giants">New York Giants</option><option value="http://espn.go.com/nfl/team/roster/_/name/nyj/new-york-jets">New York Jets</option><option value="http://espn.go.com/nfl/team/roster/_/name/oak/oakland-raiders">Oakland Raiders</option><option value="http://espn.go.com/nfl/team/roster/_/name/phi/philadelphia-eagles">Philadelphia Eagles</option><option value="http://espn.go.com/nfl/team/roster/_/name/pit/pittsburgh-steelers">Pittsburgh Steelers</option><option value="http://espn.go.com/nfl/team/roster/_/name/sd/san-diego-chargers">San Diego Chargers</option><option value="http://espn.go.com/nfl/team/roster/_/name/sf/san-francisco-49ers">San Francisco 49ers</option><option value="http://espn.go.com/nfl/team/roster/_/name/sea/seattle-seahawks">Seattle Seahawks</option><option value="http://espn.go.com/nfl/team/roster/_/name/stl/st-louis-rams">St. Louis Rams</option><option value="http://espn.go.com/nfl/team/roster/_/name/tb/tampa-bay-buccaneers">Tampa Bay Buccaneers</option><option value="http://espn.go.com/nfl/team/roster/_/name/ten/tennessee-titans">Tennessee Titans</option><option value="http://espn.go.com/nfl/team/roster/_/name/wsh/washington-redskins">Washington Redskins</option>';

var uristring = "mongodb://hary:hary1234@ds041238.mongolab.com:41238/heroku_app17130646";

var localhost = 'mongodb://localhost/mydb';

var db = mongoose.connect(uristring, function (err, res){
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '.' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var cheerio = require('cheerio'),
 request = require('request'),
 mongoose = require('mongoose');

$teams = cheerio.load(teams);
$teams('option').each(function(){
    var url = $teams(this).attr('value');
//    console.log(x);

request(url, function(err, resp, body) {
        if (err)
            throw err;
    $ = cheerio.load(body);
    $('tr.stathead').siblings('tr:not(.colhead,.stathead)').each(function(){
	var str = $(this).find('a').attr('href');                                      
	var url = str.replace("http://espn.go.com/nfl/player/", "http://espn.go.com/nfl/player/stats/");
	stats.get_stats(url);
});
});
});


