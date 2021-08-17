var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/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',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  json: {
    "text": "從nodejs server: CICD-proj來的 測試字串"
  }
};

request(options, function (error, response, body) {
  console.log(body)
});