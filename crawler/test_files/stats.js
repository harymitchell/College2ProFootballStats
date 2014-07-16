module.exports = {
get_stats: function(url){

var cheerio = require('cheerio');
var request = require('request');

request(url, function(err, resp, body) {

    var error_log = new Array;

    for (var i = 0; i < error_log.length; i++) {
	console.log(error_log[i]);
    };

        if (err)
            throw err;
    $ = cheerio.load(body);

//  General info \\
    
    if ($('.main-headshot').length){
	var name = $('.main-headshot').next('h1');
    }
    else{
	var name = $('.player-bio').find('h1').first();
    }    
    var playerNumberPosition = $('ul.general-info').find('li').first();
    var playerPosition = playerNumberPosition.text().substring(3).trim();
    var heightWeight = playerNumberPosition.next();
    var team = heightWeight.next();
    var experience1 = $('ul.player-metadata').children('li:contains("Experience")').text();
    var experience = experience1.replace("Experience", '').replace('years', '').trim();
    var college = $('ul.player-metadata').children('li:contains("College")').text().replace("College", '').trim();

    console.log();
    console.log("************************** NEW PLAYER *************************");
    console.log("Name: "+name.text());
    console.log("Position: "+playerPosition);
    console.log("Height/Weight: "+heightWeight.text());
    console.log("NFL Team: "+team.text());
    console.log("Experience: "+experience);
    console.log("College: "+college);


//  Stats \\

switch (playerPosition)
{


//////////////////////////  RECEIVER
                                              
case"WR":
case"TE":
    var gamesPlayed2012 = $('tr.stathead').first().siblings().children("td:contains('2012')").first().next().next();
    var receptions2012 = gamesPlayed2012.next();
    var passTargets2012 = receptions2012.next();
    var yards2012 = passTargets2012.next();
    var avgPass2012 = yards2012.next();
    var longestPass2012 = avgPass2012.next();
    var tds2012 = longestPass2012.next();
    var firstdowns2012 = tds2012.next();
    var fumbles2012 = firstdowns2012.next();
    var fumblesLost2012 = fumbles2012.next();

    var gamesPlayedCAR = $('tr.stathead').first().siblings().children("td:cont\
ains('Career')").first().next();
    var receptionsCAR = gamesPlayedCAR.next();
    var passTargetsCAR = receptionsCAR.next();
    var yardsCAR = passTargetsCAR.next();
    var avgPassCAR = yardsCAR.next();
    var longestPassCAR = avgPassCAR.next();
    var tdsCAR = longestPassCAR.next();
    var firstdownsCAR = tdsCAR.next();
    var fumblesCAR = firstdownsCAR.next();
    var fumblesLostCAR = fumblesCAR.next();    

    var realGamesPlayedCAR = $('tr.stathead').find('td:contains("Scoring Stats")').parent().siblings('.total').children().first().next();
    var realTDsCAR = realGamesPlayedCAR.nextAll().eq(4);

    console.log();
    console.log("Games Played 2012: "+gamesPlayed2012.text());
    console.log("Receptions 2012: "+receptions2012.text());
    console.log("Pass Targets 2012: "+passTargets2012.text());
    console.log("Yards 2012: "+yards2012.text());
    console.log("Average Yards per Pass 2012: "+avgPass2012.text());
    console.log("Longest Pass Play 2012: "+longestPass2012.text());
    console.log("Touchdowns 2012: "+tds2012.text());
    console.log("First Downs 2012: "+firstdowns2012.text());
    console.log("Fumbles 2012: "+fumbles2012.text());
    console.log("Fumbles Lost 2012: "+fumblesLost2012.text());
    console.log();
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
    }
    else{ console.log("Games Played CAR: "+gamesPlayedCAR.text());}
    console.log("Receptions CAR: "+receptionsCAR.text());
    console.log("Pass Targets CAR: "+passTargetsCAR.text());
    console.log("Yards CAR: "+yardsCAR.text());
    console.log("Average Yards per Pass CAR: "+avgPassCAR.text());
    console.log("Longest Pass Play CAR: "+longestPassCAR.text());
    console.log("Touchdowns CAR: "+realTDsCAR.text());
    console.log("First Downs CAR: "+firstdownsCAR.text());
    console.log("Fumbles CAR: "+fumblesCAR.text());
    console.log("Fumbles Lost CAR: "+fumblesLostCAR.text());

    break;


//////////////////////////  RUNNINGBACK                                     

    case"FB":
    case"RB":

    var gamesPlayed2012 = $('tr.stathead').first().siblings().children("td:contains('2012')").first().next().next();
    var receptions2012 = gamesPlayed2012.next();
    var passTargets2012 = receptions2012.next();
    var yards2012 = passTargets2012.next();
    var avgPass2012 = yards2012.next();
    var longestPass2012 = avgPass2012.next();
    var tds2012 = longestPass2012.next();
    var firstdowns2012 = tds2012.next();
    var fumbles2012 = firstdowns2012.next();
    
    var gamesPlayedCAR = $('tr.stathead').first().siblings().children("td:cont\
ains('Career')").first().next();
    var receptionsCAR = gamesPlayedCAR.next();
    var passTargetsCAR = receptionsCAR.next();
    var yardsCAR = passTargetsCAR.next();
    var avgPassCAR = yardsCAR.next();
    var longestPassCAR = avgPassCAR.next();
    var tdsCAR = longestPassCAR.next();
    var firstdownsCAR = tdsCAR.next();
    var fumblesCAR = firstdownsCAR.next();
    
    var realGamesPlayedCAR = $('tr.stathead').find('td:contains("Scoring Stats")').parent().siblings('.total').children().first().next();
    var realTDsCAR = realGamesPlayedCAR.nextAll().eq(4);

    console.log();
    console.log("Games Played 2012: "+gamesPlayed2012.text());
    console.log("Attempted Rushes 2012: "+receptions2012.text());
    console.log("Yards2012: "+passTargets2012.text());
    console.log("Average Rush 2012: "+yards2012.text());
    console.log("Longest Rush 2012: "+avgPass2012.text());
    console.log("Touchdowns 2012: "+longestPass2012.text());
    console.log("First Downs 2012: "+tds2012.text());
    console.log("Fumbles 2012: "+firstdowns2012.text());
    console.log("Fumbles Lost 2012: "+fumbles2012.text());
        console.log();
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
    }
    else{ console.log("Games Played CAR: "+gamesPlayedCAR.text());}
    console.log("Attempted Rushes CAR: "+receptionsCAR.text());
    console.log("Yards CAR: "+passTargetsCAR.text());
    console.log("Average Rush CAR: "+yardsCAR.text());
    console.log("Longest Rush CAR: "+avgPassCAR.text());
    console.log("Touchdowns CAR: "+realTDsCAR.text());
    console.log("First Downs CAR: "+tdsCAR.text());
    console.log("Fumbles CAR: "+firstdownsCAR.text());
    console.log("Fumbles Lost CAR: "+fumblesCAR.text());    
    break;

//////////////////////////  QUARTERBACK    
case"QB":
    
    var gamesPlayed2012 = $('tr.stathead').first().siblings().children("td:contains('2012')").first().next().next();
    var receptions2012 = gamesPlayed2012.next();
    var passTargets2012 = receptions2012.next();
    var yards2012 = passTargets2012.next();
    var avgPass2012 = yards2012.next();
    var longestPass2012 = avgPass2012.next();
    var tds2012 = longestPass2012.next();
    var firstdowns2012 = tds2012.next();
    var fumbles2012 = firstdowns2012.next();
    var fumblesLost2012 = fumbles2012.next();
    var qbr2012 = fumblesLost2012.next();
    var pr2012 = qbr2012.next();

    var gamesPlayedCAR = $('tr.stathead').first().siblings().children("td:cont\
ains('Career')").first().next();
    var receptionsCAR = gamesPlayedCAR.next();
    var passTargetsCAR = receptionsCAR.next();
    var yardsCAR = passTargetsCAR.next();
    var avgPassCAR = yardsCAR.next();
    var longestPassCAR = avgPassCAR.next();
    var tdsCAR = longestPassCAR.next();
    var firstdownsCAR = tdsCAR.next();
    var fumblesCAR = firstdownsCAR.next();
    var fumblesLostCAR = fumblesCAR.next();    
    var qbrCAR = fumblesLostCAR.next();
    var prCAR = qbrCAR.next();

    var realGamesPlayedCAR = $('tr.stathead').find('td:contains("Scoring Stats")').parent().siblings('.total').children().first().next();
    var realTDsCAR = realGamesPlayedCAR.nextAll().eq(4);

    console.log();
    console.log("Games Played 2012: "+gamesPlayed2012.text());
    console.log("Completions 2012: "+receptions2012.text());
    console.log("Attempted 2012: "+passTargets2012.text());
    console.log("Completion Percentage 2012: "+yards2012.text());
    console.log("Yards 2012: "+avgPass2012.text());
    console.log("Average Pass 2012: "+longestPass2012.text());
    console.log("Touchdowns 2012: "+tds2012.text());
    console.log("Longest Pass 2012: "+firstdowns2012.text());
    console.log("Interceptions 2012: "+fumbles2012.text());
    console.log("Fumbles 2012: "+fumblesLost2012.text());
    console.log("Quarterback Rating 2012: "+qbr2012.text());
    console.log("Pass Rating 2012: "+pr2012.text());
    console.log();
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
    }
    else{ console.log("Games Played CAR: "+gamesPlayedCAR.text());}
    console.log("Completions CAR: "+receptionsCAR.text());
    console.log("Attempted CAR: "+passTargetsCAR.text());
    console.log("Completion Percentage CAR: "+yardsCAR.text());
    console.log("Yards CAR: "+avgPassCAR.text());
    console.log("Average Pass CAR: "+longestPassCAR.text());
    console.log("Touchdowns car: "+tdsCAR.text());
    console.log("Longest Pass CAR: "+firstdownsCAR.text());
    console.log("Interceptions CAR: "+fumblesCAR.text());
    console.log("Fumbles CAR: "+fumblesLostCAR.text());
    console.log("Quarterback Rating CAR: "+qbrCAR.text());
    console.log("Pass Rating CAR: "+prCAR.text());
    break;

///////////////////// Defensive Backs
    case "NT" :
    case "NG" :
    case "DT" :
    case "DL" :
    case "LB" :
    case "CB" :
    case "S"  :
    case "DB" :
    case "DE" :

    var gamesPlayed2012 = $('tr.stathead').first().siblings().children("td:contains('2012')").first().next().next();
    var receptions2012 = gamesPlayed2012.next();
    var passTargets2012 = receptions2012.next();
    var yards2012 = passTargets2012.next();
    var avgPass2012 = yards2012.next();
    var longestPass2012 = avgPass2012.next();
    var tds2012 = longestPass2012.next();
    var firstdowns2012 = tds2012.next();
    var fumbles2012 = firstdowns2012.next();
    var fumblesLost2012 = fumbles2012.next();
    var qbr2012 = fumblesLost2012.next();
    var pr2012 = qbr2012.next();

    var gamesPlayedCAR = $('tr.stathead').first().siblings().children("td:contains('Career')").first().next();
    var receptionsCAR = gamesPlayedCAR.next();
    var passTargetsCAR = receptionsCAR.next();
    var yardsCAR = passTargetsCAR.next();
    var avgPassCAR = yardsCAR.next();
    var longestPassCAR = avgPassCAR.next();
    var tdsCAR = longestPassCAR.next();
    var firstdownsCAR = tdsCAR.next();
    var fumblesCAR = firstdownsCAR.next();
    var fumblesLostCAR = fumblesCAR.next();
    var qbrCAR = fumblesLostCAR.next();
    var prCAR = qbrCAR.next();


    var realGamesPlayedCAR = $('tr.stathead').find('td:contains("Scoring Stats")').parent().siblings('.total').children().first().next();
    var realTDsCAR = realGamesPlayedCAR.nextAll().eq(4);

    console.log();
    console.log("Games Played 2012: "+gamesPlayed2012.text());
    console.log("Combined Tackles 2012: "+receptions2012.text());
    console.log("Total Tackles 2012: "+passTargets2012.text());
    console.log("Assists 2012: "+yards2012.text());
    console.log("Sacks 2012: "+avgPass2012.text());
    console.log("Forced Fumbles 2012: "+longestPass2012.text());
    console.log("Fumbles Recovered 2012: "+tds2012.text());
    console.log("Yards off Fumbles 2012: "+firstdowns2012.text());
    console.log("Interceptions 2012: "+fumbles2012.text());
    console.log("Yards off Interceptions2012: "+fumblesLost2012.text());
    console.log("Average Interception Return 2012: "+qbr2012.text());
    console.log("Longest Interception Return 2012: "+pr2012.text());
    console.log();
//    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
//    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
//    }
    console.log("Games Played CAR: "+gamesPlayedCAR.text());
    console.log("Combined Tackles CAR: "+receptionsCAR.text());
    console.log("Total Tackles CAR: "+passTargetsCAR.text());
    console.log("Assists CAR: "+yardsCAR.text());
    console.log("Sacks CAR: "+avgPassCAR.text());
    console.log("Forced Fumbles CAR: "+longestPassCAR.text());
    console.log("Fumbles Recovered CAR: "+tdsCAR.text());
    console.log("Yards off Fumbles CAR: "+firstdownsCAR.text());
    console.log("Interceptions CAR: "+fumblesCAR.text());
    console.log("Yards off Interceptions CAR: "+fumblesLostCAR.text());
    console.log("Average Interception Return CAR: "+qbrCAR.text());
    console.log("Longest Interception Return CAR: "+prCAR.text());
    break;

case"PK":
    
    var gamesPlayed2012 = $('tr.stathead').children('td:contains("Kicking Stats")').parent().siblings().children("td:contains('2012')").first().next().next();
    var receptions2012 = gamesPlayed2012.next();
    var passTargets2012 = receptions2012.next();
    var yards2012 = passTargets2012.next();
    var avgPass2012 = yards2012.next();
    var longestPass2012 = avgPass2012.next();
    var tds2012 = longestPass2012.next();
    var firstdowns2012 = tds2012.next();
    var fumbles2012 = firstdowns2012.next();
    var fumblesLost2012 = fumbles2012.next();

    var gamesPlayedCAR = $('tr.stathead').children('td:contains("Kicking Stats")').parent().siblings().children("td:contains('Career')").first().next();
    var receptionsCAR = gamesPlayedCAR.next();
    var passTargetsCAR = receptionsCAR.next();
    var yardsCAR = passTargetsCAR.next();
    var avgPassCAR = yardsCAR.next();
    var longestPassCAR = avgPassCAR.next();
    var tdsCAR = longestPassCAR.next();
    var firstdownsCAR = tdsCAR.next();
    var fumblesCAR = firstdownsCAR.next();
    var fumblesLostCAR = fumblesCAR.next();    

    var realGamesPlayedCAR = $('tr.stathead').find('td:contains("Scoring Stats")').parent().siblings('.total').children().first().next();
    var realTDsCAR = realGamesPlayedCAR.nextAll().eq(4);

    console.log();
    console.log("Games Played 2012: "+gamesPlayed2012.text());
    console.log("Field Goals Made 2012: "+receptions2012.text());
    console.log("Field Goals Attempted 2012: "+passTargets2012.text());
    console.log("FG Percentage 2012: "+yards2012.text());
   // console.log("Average Yards per Pass 2012: "+avgPass2012.text());
   // console.log("Longest Pass Play 2012: "+longestPass2012.text());
  //  console.log("Touchdowns 2012: "+tds2012.text());
 //   console.log("First Downs 2012: "+firstdowns2012.text());
  //  console.log("Fumbles 2012: "+fumbles2012.text());
 //   console.log("Fumbles Lost 2012: "+fumblesLost2012.text());
    console.log();
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
    }
    else{ console.log("Games Played CAR: "+gamesPlayedCAR.text());}
    console.log("Field Goals Made CAR: "+receptionsCAR.text());
    console.log("Field Goals Attempted CAR: "+passTargetsCAR.text());
    console.log("FG Percentage CAR: "+yardsCAR.text());
//    console.log("Average Yards per Pass CAR: "+avgPassCAR.text());
 //   console.log("Longest Pass Play CAR: "+longestPassCAR.text());
  //  console.log("Touchdowns CAR: "+realTDsCAR.text());
//    console.log("First Downs CAR: "+firstdownsCAR.text());
 //   console.log("Fumbles CAR: "+fumblesCAR.text());
  //  console.log("Fumbles Lost CAR: "+fumblesLostCAR.text());
    
    break;

case'P':
var gamesPlayed2012 = $('tr.stathead').children('td:contains("Punting Stats")').parent().siblings().children("td:contains('2012')").first().next().next();
    var receptions2012 = gamesPlayed2012.next();
    var passTargets2012 = receptions2012.next();
    var yards2012 = passTargets2012.next();
    var avgPass2012 = yards2012.next();
    var longestPass2012 = avgPass2012.next();
    var tds2012 = longestPass2012.next();
    var firstdowns2012 = tds2012.next();
    var fumbles2012 = firstdowns2012.next();
    var fumblesLost2012 = fumbles2012.next();

    var gamesPlayedCAR = $('tr.stathead').children('td:contains("Punting Stats")').parent().siblings().children("td:contains('Career')").first().next();
    var receptionsCAR = gamesPlayedCAR.next();
    var passTargetsCAR = receptionsCAR.next();
    var yardsCAR = passTargetsCAR.next();
    var avgPassCAR = yardsCAR.next();
    var longestPassCAR = avgPassCAR.next();
    var tdsCAR = longestPassCAR.next();
    var firstdownsCAR = tdsCAR.next();
    var fumblesCAR = firstdownsCAR.next();
    var fumblesLostCAR = fumblesCAR.next();

    var realGamesPlayedCAR = $('tr.stathead').find('td:contains("Scoring Stats")').parent().siblings('.total').children().first().next();
    var realTDsCAR = realGamesPlayedCAR.nextAll().eq(4);

    console.log();
    console.log("Games Played 2012: "+gamesPlayed2012.text());
    console.log("Punts 2012: "+receptions2012.text());
    console.log("Average 2012: "+passTargets2012.text());
    console.log("Long 2012: "+yards2012.text());
   console.log();
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
    }
    else{ console.log("Games Played CAR: "+gamesPlayedCAR.text());}
    console.log("Punts CAR: "+receptionsCAR.text());
    console.log("Average CAR: "+passTargetsCAR.text());
    console.log("Long CAR: "+yardsCAR.text());
    
    break;


case "OL":
case "C" :
case "OT" :
case "G" :
case"LS":
    
    console.log("No stats available at this time");
    break;

default:
    console.log("Player position "+playerPosition+" not found!");
    
//end switch(position)
}
//end request()
});
//end module.exports
}}
