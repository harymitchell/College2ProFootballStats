module.exports = {

stats: function($) {

var cheerio = require('cheerio'),
 mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 models = require('../models/models');

//////////////////////////  QUARTERBACK    

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

var player = new models.quarterback();

player._id = name.text()+'_'+team.text()+'_'+playerPosition;
player.personal.name = name.text();
player.personal.position = playerPosition;
player.personal.team = team.text();
player.personal.college = college;
player.personal.experience = experience;


player.stats2012.gamesPlayed2012 = gamesPlayed2012.text().replace(",","");
player.stats2012.attempted2012 = passTargets2012.text().replace(",",""); 
player.stats2012.completions2012 = receptions2012.text().replace(",","");
player.stats2012.percentages2012 = yards2012.text().replace(",","");
player.stats2012.yards2012 = avgPass2012.text().replace(",","");
player.stats2012.averagePass2012 = longestPass2012.text().replace(",","");
player.stats2012.tds2012 = tds2012.text().replace(",","");
player.stats2012.longestPass2012 = firstdowns2012.text().replace(",","");
player.stats2012.interceptions2012 = fumbles2012.text().replace(",","");
player.stats2012.fumbles2012 = fumblesLost2012.text().replace(",","");
player.stats2012.rating2012 = qbr2012.text().replace(",","");
player.stats2012.passRating2012 =  pr2012.text().replace(",","");

    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
	player.statsCarrer.gamesPlayed = realGamesPlayedCAR.text();
    }
    else{
	player.statsCarrer.gamesPlayed = gamesPlayedCAR.text();
    }

player.statsCarrer.completions = receptionsCAR.text().replace(",","");
player.statsCarrer.attemped = passTargetsCAR.text().replace(",","");
player.statsCarrer.percentages = yardsCAR.text().replace(",","");
player.statsCarrer.yards = avgPassCAR.text().replace(",","");
player.statsCarrer.averagePass = longestPassCAR.text().replace(",","");
player.statsCarrer.tds = tdsCAR.text().replace(",","");
player.statsCarrer.longestPass = firstdownsCAR.text().replace(",","");
player.statsCarrer.interceptions = fumblesCAR.text().replace(",","");
player.statsCarrer.fumbles = fumblesLostCAR.text().replace(",",""); 
player.statsCarrer.rating = qbrCAR.text().replace(",","");
player.statsCarrer.passRating = prCAR.text().replace(",","");

var upsertData = player.toObject();
delete upsertData._id;
models.quarterback.update({_id:player.id}, upsertData, {upsert: true}, function(err) {
	if (err) throw err;
});// end
player.save                                                                                                                                   
models.quarterback.findOne({'name': player.personal.name}, function(err, user) {
if (player != null) {
console.log('Found: ' + player.personal.name +'.\n He is a ' + player.personal.position + 'on the ' + player.personal.team + '.\n And he went to ' + player.personal.college);
//mongoose.connection.close();       
//console.log("\nDone")
}//end if(player!=null)                                                        
                                                                                
});//end playerModel.findOne     
}
}
