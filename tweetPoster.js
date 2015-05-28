var TweetPoster = function(){};

TweetPoster.prototype.reply = function(client, tweet, variableTextComputer) {
	if(tweet.text.toLowerCase().indexOf("what time today")> -1 ) {
  	
  	var timeText = variableTextComputer(tweet);

		var tweetMessage =  '@' + tweet.user.screen_name + ' The timings for today is ' + timeText;
    client.post('statuses/update', {status: tweetMessage, in_reply_to_status_id: tweet.id }, 
    	function(error, tweet, response){
  			if (!error) {
    			console.log(tweet);
  			}
		});
  }
};

module.exports = new TweetPoster();