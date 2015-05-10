var Twitter = require('twitter');
var moment = require('moment');

var rahukaalamTimes = ['16:30-18:00', '07:30-9:00', '15:00-16:30', '12:00-13:30','13:30-15:00', '10:30-12:00', '9:00-10:30']
 
var botName = "@rahukaalam_bot";

var client = new Twitter({
	consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});


client.stream('statuses/filter', {track: botName}, function(stream) {
  stream.on('data', function(tweet) {
    if(tweet.text.toLowerCase().indexOf("what time today")> -1 ) {
    	var date = moment();
			date.utc();
			var tweetMessage =  '@' + tweet.user.screen_name + ' The timings for today is ' + rahukaalamTimes[date.utcOffset("05:30").day()];
    	client.post('statuses/update', {status: tweetMessage, in_reply_to_status_id: tweet.id }, 
    		function(error, tweet, response){
  				if (!error) {
    				console.log(tweet);
  				}
			});
    }
  });
 
  stream.on('error', function(error) {
  	console.log(error);
    throw error;
  });
});