var Twit = require('twit')


var T = new Twit({
  consumer_key:         'YkL5hQR8f7cfkvBehs7Ppjqrj',
  consumer_secret:      '3J0MBObGfsB1AQFkeSYV2f5kxfwWvnZTXDrBFHU24ctgTgrJQH',
  access_token:         '877612465156222977-JupPFZ3swmft845iustHaYcsCRwepZf',
  access_token_secret:  'JKeYMYXTVPrmWx81rqGc3xh8Rx7YSfyowtYnTq28lmMXH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


T.post('statuses/update', { in_reply_to_status_id: '14515129', status: '@leiaj Hi' }, function(err, data, response) {
  console.log(data)
})



T.post()
