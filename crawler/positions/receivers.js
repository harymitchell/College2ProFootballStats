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

var player = new models.receiver();

player._id = name.text()+'_'+team.text()+'_'+playerPosition;
player.personal.name = name.text();
player.personal.position = playerPosition;
player.personal.team = team.text();
player.personal.college = college;
player.personal.experience = experience;

player.stats2012.gamesPlayed2012 = gamesPlayed2012.text().replace(",","");
player.stats2012.receptions2012 = receptions2012.text().replace(",",""); 
player.stats2012.passTargets2012 = passTargets2012.text().replace(",","");
player.stats2012.yards2012 = yards2012.text().replace(",","");
player.stats2012.avg2012 = avgPass2012.text().replace(",","");
player.stats2012.longest2012 = longestPass2012.text().replace(",","");
player.stats2012.tds2012 = tds2012.text().replace(",","");
player.stats2012.fds2012 = firstdowns2012.text().replace(",","");
player.stats2012.fumbles2012 = fumbles2012.text().replace(",","");
player.stats2012.fumblesLost2012 = fumblesLost2012.text().replace(",","");

    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
	player.statsCarrer.gamesPlayed = realGamesPlayedCAR.text();
    }
    else{
	player.statsCarrer.gamesPlayed = gamesPlayedCAR.text();
    }

//player.statsCareer.gamesPlayed = gamesPlayedCAR.text();
player.statsCarrer.receptions = receptionsCAR.text().replace(",","");
player.statsCarrer.passTargets = passTargetsCAR.text().replace(",","");
player.statsCarrer.yards = yardsCAR.text().replace(",","");
player.statsCarrer.avg = avgPassCAR.text().replace(",","");
player.statsCarrer.longest = longestPassCAR.text().replace(",","");
player.statsCarrer.tds = tdsCAR.text().replace(",","");
player.statsCarrer.fds = firstdownsCAR.text().replace(",","");
player.statsCarrer.fumbles = fumblesCAR.text().replace(",","");
player.statsCarrer.fumblesLost = fumblesLostCAR.text().replace(",","");


var upsertData = player.toObject();
delete upsertData._id;
models.receiver.update({_id:player.id}, upsertData, {upsert: true}, function(err) {

if (err) throw err;
});// end player.save                                                                                                                                   
models.receiver.findOne({'name': player.personal.name}, function(err, user) {
if (player != null) {
console.log('Found: ' + player.personal.name +'.\n He is a ' + player.personal.position + 'on the ' + player.personal.team + '.\n And he went to ' + player.personal.college);
}//end if(player!=null)                                                        \
                                                                                
});//end playerModel.findOne     
}
}
