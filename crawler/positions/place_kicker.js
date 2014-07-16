module.exports = {

stats: function($) {

var cheerio = require('cheerio'),
 mongoose = require('mongoose'),
 Schema = mongoose.Schema;
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
    console.log();
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
    console.log("Games Played CAR: "+realGamesPlayedCAR.text());
    }
    else{ console.log("Games Played CAR: "+gamesPlayedCAR.text());}
    console.log("Field Goals Made CAR: "+receptionsCAR.text());
    console.log("Field Goals Attempted CAR: "+passTargetsCAR.text());
    console.log("FG Percentage CAR: "+yardsCAR.text());

var player = new models.placeKicker();

player._id = name.text()+'_'+team.text()+'_'+playerPosition;
player.personal.name = name.text();
player.personal.position = playerPosition;
player.personal.team = team.text();
player.personal.college = college;
player.personal.experience = experience;


player.stats2012.gamesPlayed2012 = gamesPlayed2012.text().replace(",","");
player.stats2012.fieldGoals2012 = receptions2012.text().replace(",","");
player.stats2012.attempted2012 = passTargets2012.text().replace(",","");
player.stats2012.percentage2012 = yards2012.text().replace(",","");
    
    if(realGamesPlayedCAR.text() > gamesPlayedCAR.text()) {
	player.statsCareer.gamesPlayedCareer = realGamesPlayedCAR.text();
    }
    else{
	player.statsCareer.gamesPlayedCareer = gamesPlayedCAR.text();
    }

player.stats2012.gamesPlayedCareer = gamesPlayedCAR.text().replace(",","");
player.stats2012.fieldGoalsCareer = receptionsCAR.text().replace(",","");
player.stats2012.attemptedCareer = passTargetsCAR.text().replace(",","");
player.stats2012.percentageCareer = yardsCAR.text().replace(",","")

var upsertData = player.toObject();
delete upsertData._id;
models.placeKicker.update({_id:player.id}, upsertData, {upsert: true}, function(err) {

if (err) throw err;
});// end player.save                                                                                                                                   
models.placeKicker.findOne({'name': player.personal.name}, function(err, user) {
if (player != null) {
console.log('Found: ' + player.personal.name +'.\n He is a ' + player.personal.position + 'on the ' + player.personal.team + '.\n And he went to ' + player.personal.college);
//mongoose.connection.close();       
//console.log("\nDone")
}//end if(player!=null)                                                        
                                                                                
});//end playerModel.findOne     
}
}
