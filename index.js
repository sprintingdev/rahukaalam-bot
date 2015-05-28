var Twitter = require('twitter');
var TweetPoster = require('./tweetPoster');
var moment = require('moment');
var RKCalculator = require('./rkCalculator');

var botName = "@rahukaalam_bot";

var client = new Twitter({
	consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});


client.stream('statuses/filter', {track: botName}, function(stream) {
  stream.on('data', function(tweet) {
    TweetPoster.reply(client, tweet, function(){
      RKCalculator.calculateTime({sunrise: "06:00", sunset: "18:00"}, function(){
        var date = moment();
        date.utc();
        return date.utcOffset("05:30").day();
      });
    });
  });
 
  stream.on('error', function(error) {
  	console.log(error);
    throw error;
  });
});