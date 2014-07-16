module.exports = {
get_stats: function(url){

var cheerio = require('cheerio'),
 request = require('request'),
 mongoose = require('mongoose');

var  Schema = mongoose.Schema,
 quarterbacks = require('./positions/quarterbacks'),
 receivers = require('./positions/receivers'),
 runningbacks = require('./positions/runningbacks'),
 defense = require('./positions/defense')
 placeKicker = require('./positions/place_kicker');
 punter = require('./positions/punters');
 offensive_line = require('./positions/offensive_line');

//------------------Start Request-------------------\\

request(url, function(err, resp, body) {

    var error_log = new Array;

    for (var i = 0; i < error_log.length; i++) {
	console.log(error_log[i]);
    };

    if (err)
    	throw err;

    $ = cheerio.load(body);

    if ($('.main-headshot').length){
	var name = $('.main-headshot').next('h1');
    }
    else{
	var name = $('.player-bio').find('h1').first();
    }    
    var playerNumberPosition = $('ul.general-info').find('li').first();
    var playerPosition = playerNumberPosition.text().substring(3).trim();

//  Stats \\

switch (playerPosition)
{

//  RECEIVER
                                              
    case"WR":
    case"TE":

     receivers.stats($);
    
     break;
//  RUNNINGBACK                                     

    case"FB":
    case"RB":

     runningbacks.stats($);
    
     break;

//  QUARTERBACK    
    
    case"QB":
    
     quarterbacks.stats($);

     break;

// Defense

    case "NT" :
    case "NG" :
    case "DT" :
    case "DL" :
    case "LB" :
    case "CB" :
    case "S"  :
    case "DB" :
    case "DE" :

     defense.stats($);

    break;

// Place Kicker
    
    case"PK":
    
     placeKicker.stats($);
    

    break;

// Punter

    case'P':
    
     punter.stats($);
    
    break;


    case "OL":
    case "C" :
    case "OT" :
    case "G" :
    case"LS":
    
     offensive_line.stats($);
    
    break;

default:
    console.log("Player position "+playerPosition+" not found!");
    
//end switch(position)
}
//end request()
});
//mongoose.connection.close();
}//end get_stats()
}//end module.exports



