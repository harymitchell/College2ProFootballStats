module.exports = {

stats: function($) {

var cheerio = require('cheerio'),
 mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 models = require('../models/models');

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
    var experience = experience1.replace("Experience", '').replace('years', '')
.trim();
    var college = $('ul.player-metadata').children('li:contains("College")').text().replace("College", '').trim();

    console.log();
    console.log("Name: "+name.text());                                        
    console.log("Position: "+playerPosition);                                 
    console.log("Height/Weight: "+heightWeight.text());                       
    console.log("NFL Team: "+team.text());                                    
    console.log("Experience: "+experience);                                   
    console.log("College: "+college);                                        
    
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

var player = new models.defensivePlayer();

player._id = name.text()+'_'+team.text()+'_'+playerPosition;
player.personal.name = name.text();
player.personal.position = playerPosition;
player.personal.team = team.text();
player.personal.college = college;
player.personal.experience = experience;


player.stats2012.gamesPlayed2012 = gamesPlayed2012.text().replace(",","");
player.stats2012.combtackles2012 = receptions2012.text().replace(",",""); 
player.stats2012.tackles2012 = passTargets2012.text().replace(",","");
player.stats2012.assists2012 = yards2012.text().replace(",","");
player.stats2012.sacks2012 = avgPass2012.text().replace(",","");
player.stats2012.forcedFumbles2012 = longestPass2012.text().replace(",","");
player.stats2012.recoveredFumbles2012 = tds2012.text().replace(",","");
player.stats2012.yardsOffFumbles2012= firstdowns2012.text().replace(",","");
player.stats2012.interceptions2012 = fumbles2012.text().replace(",","");
player.stats2012. yardsOffInterceptions2012 = fumblesLost2012.text().replace(",","");
player.stats2012.avgInterceptionReturn2012 = qbr2012.text().replace(",","");
player.stats2012.longestInterceptionReturn2012 =  pr2012.text().replace(",","");

    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
	player.statsCareer.gamesPlayed = realGamesPlayedCAR.text();
    }
    else{
	player.statsCareer.gamesPlayed = gamesPlayedCAR.text();
    }

player.statsCareer.gamesPlayed = gamesPlayedCAR.text().replace(",","");
player.statsCareer.combtackles = receptionsCAR.text().replace(",","");
player.statsCareer.tackles = passTargetsCAR.text().replace(",","");
player.statsCareer.assists = yardsCAR.text().replace(",","");
player.statsCareer.sacks = avgPassCAR.text().replace(",","");
player.statsCareer.forcedFumbles = longestPassCAR.text().replace(",","");
player.statsCareer.recoveredFumbles = tdsCAR.text().replace(",","");
player.statsCareer.yardsOffFumbles = firstdownsCAR.text().replace(",","");
player.statsCareer.interceptions = fumblesCAR.text().replace(",","");
player.statsCareer. yardsOffInterceptions = fumblesLostCAR.text().replace(",","");
player.statsCareer.avgInterceptionReturn = qbrCAR.text().replace(",","");
player.statsCareer.longestInterceptionReturn =  prCAR.text().replace(",","");



var upsertData = player.toObject();
delete upsertData._id;
models.defensivePlayer.update({_id:player.id}, upsertData, {upsert: true}, function(err) {

if (err) throw err;
});// end player.save                                                                                                                                   
models.defensivePlayer.findOne({'name': player.personal.name}, function(err, user) {
if (player != null) {
console.log('Found: ' + player.personal.name +'.\n He is a ' + player.personal.position + 'on the ' + player.personal.team + '.\n And he went to ' + player.personal.college);
}//end if(player!=null)                                                        \
                                                                                
});//end playerModel.findOne     
}
}
