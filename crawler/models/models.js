var  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  defensivePlayers = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
stats2012:
    {gamesPlayed2012: Number,
     combtackles2012: Number,
     tackles2012: Number,
     assists2012: Number,
     sacks2012: Number,
     forcedFumbles2012: Number,
     recoveredFumbles2012: Number,
     yardsOffFumbles2012: Number,
     interceptions2012: Number,
     yardsOffInterceptions2012: Number,
     avgInterceptionReturn2012: Number,
     longestInterceptionReturn2012: Number},
statsCareer:
    {gamesPlayed: Number,
     combtackles: Number,
     tackles: Number,
     assists: Number,
     sacks: Number,
     forcedFumbles: Number,
     recoveredFumbles: Number,
     yardsOffFumbles: Number,
     interceptions: Number,
     yardsOffInterceptions: Number,
     avgInterceptionReturn: Number,
     longestInterceptionReturn: Number}
})

var placeKickers = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
stats2012:
    {gamesPlayed2012: Number,
     fieldGoals2012: Number,
     attempted2012: Number,
     percentage2012: Number},
statsCareer:
    {gamesPlayedCareer: Number,
     fieldGoalsCareer: Number,
     attemptedCareer: Number,
     percentageCareer: Number}
});

 var quarterbacks = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
stats2012:
    {gamesPlayed2012: Number,
     completions2012: Number,
     attemped2012: Number,
     percentages2012: Number,
     yards2012: Number,
     averagePass2012: Number,
     tds2012: Number,
     longestPass2012: Number,
     interceptions2012: Number,
     fumbles2012: Number,
     rating2012: Number,
     passRating2012: Number},
statsCarrer:
    {gamesPlayed: Number,
     completions: Number,
     attemped: Number,
     percentages: Number,
     yards: Number,
     averagePass: Number,
     tds: Number,
     longestPass: Number,
     interceptions: Number,
     fumbles: Number,
     rating: Number,
     passRating: Number}
});

var runningbacks = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
stats2012:
    {gamesPlayed2012: Number,
     rushes2012: Number,
     yards2012: Number,
     avgrush2012: Number,
     longest2012: Number,
     tds2012: Number,
     fds2012: Number,
     fumbles2012: Number,
     fumblesLost2012: Number},
statsCarrer:
    {gamesPlayed: Number,
     rushes: Number,
     yards: Number,
     avgrush: Number,
     longest: Number,
     tds: Number,
     fds: Number,
     fumbles: Number,
     fumblesLost: Number},
});

var receivers = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
stats2012:
    {gamesPlayed2012: Number,
     receptions2012: Number,
     passTargets2012: Number,
     yards2012: Number,
     avg2012: Number,
     longest2012: Number,
     tds2012: Number,
     fds2012: Number,
     fumbles2012: Number,
     fumblesLost2012: Number},
statsCarrer:
     {gamesPlayed: Number,
     receptions: Number,
     passTargets: Number,
     yards: Number,
     avg: Number,
     longest: Number,
     tds: Number,
     fds: Number,
     fumbles: Number,
     fumblesLost: Number},
});

var punters = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
stats2012:
    {gamesPlayed2012: Number,
     punts2012: Number,
     average2012: Number,
     longest2012: Number},
statsCareer:
    {gamesPlayed: Number,
     punts: Number,
     average: Number,
     longest : Number},

});

var offensiveLinemen = new Schema({
_id: String,
personal:
    {name: String,
     position: String,
     team: String,
     college: String,
     experience: Number},
});

var offensiveLineman = mongoose.model('offensiveLinemen', offensiveLinemen);
var punter = mongoose.model('punters', punters);
var receiver = mongoose.model('receivers', receivers);
var runningback = mongoose.model('runningbacks', runningbacks);
var quarterback = mongoose.model('quarterbacks', quarterbacks);
var placeKicker = mongoose.model('placeKicker', placeKickers);
var defensivePlayer = mongoose.model('defensivePlayer', defensivePlayers);

exports.offensiveLineman = offensiveLineman;
exports.punter = punter;
exports.receiver = receiver;
exports.runningback = runningback;
exports.quarterback = quarterback;
exports.placeKicker = placeKicker;
exports.defensivePlayer = defensivePlayer;
