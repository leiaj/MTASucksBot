// TWITTER LIB:
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'YkL5hQR8f7cfkvBehs7Ppjqrj',
  consumer_secret: '3J0MBObGfsB1AQFkeSYV2f5kxfwWvnZTXDrBFHU24ctgTgrJQH',
  access_token_key: '877612465156222977-JupPFZ3swmft845iustHaYcsCRwepZf',
  access_token_secret: 'JKeYMYXTVPrmWx81rqGc3xh8Rx7YSfyowtYnTq28lmMXH'
});

// var params = {screen_name: 'fixthetrains'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// FixTrains.prototype = {
function startStream() {
    client.stream('statuses/filter', {
      'follow': '14515129'
    }, function (stream) {
      stream.on('data', function (tweet) {
        // only reply to tweets _from_ user
        if (!tweet.user || tweet.user.screen_name !== 'leiaj') return;

        client.post('statuses/update', {
          'in_reply_to_status_id': tweet.id_str,
          status: '.@NYGovCuomo FIX THE SUBWAY'
        }, function (err) {
          if (err) handleError(err);
        });
      });

      stream.on('error');
      stream.on('end');
    });

    // function resurrect() {
    //   stream = null
    //   console.log('RESURRECTING STREAM');
    //   setTimeout(function() {
    //     startStream();
    //   }, 1000 * 60 * 5 ); // wait 5 minutes
    // }
    //
    // function handleError(err) {
    //   console.log(err);
    //   process.exit();
    // }
  }
// }
// startStream()
//
// 232268199
