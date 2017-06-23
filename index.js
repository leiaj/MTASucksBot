// START HEROKU SETUP
var express = require("express");
var app = express();
app.get('/', function(req, res){ res.send('The robot is happily running.'); });
app.listen(process.env.PORT || 5000);
// END HEROKU SETUP

var Twit = require('twit')



var T = new Twit({
  consumer_key:         process.env['TWITTER_CONSUMER_KEY'],
  consumer_secret:      process.env['TWITTER_CONSUMER_SECRET'],
  access_token:         process.env['TWITTER_ACCESS_TOKEN_KEY'],
  access_token_secret:  process.env['TWITTER_ACCESS_TOKEN_SECRET'],
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


var stream = T.stream('user', {in_reply_to_status_id:'14515129'})
var ourTweet = ".@NYGovCuomo FIX THE SUBWAY RT @"

stream.on('message', function (msg) {
  console.log("i'm watching u")
  mtaTweets(fixSubway)
})


function mtaTweets(callback){
  T.get('search/tweets', {q: 'due from:leiaj', count: 1}, function(err, data, response){
    tweet = {text: data.statuses[0].text, user: data.statuses[0].user.screen_name}
    callback(tweet)
  })
}

const fixSubway = function(tweet){
  var firstTweet = tweet.user + " " + tweet.text
  var finalTweet = ourTweet + firstTweet
  if (finalTweet.length > 140){
    finalTweet = finalTweet.slice(0,140)
  }
  T.post('statuses/update', {status: finalTweet})
  console.log(tweet)
  console.log(finalTweet)
}
