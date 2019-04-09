var request = require('request');
var token = require('./secrets');
var https = require('https');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Bearer ' + token.GITHUB_TOKEN
    }
  };


  request(options, function(err, res, body) {
    var output = JSON.parse(body);
    for (user in output){
      cb(output[user].avatar_url, "./avatars/" + output[user].login);
    }

  });
}

function downloadImageByURL(url, filePath) {
      const file = fs.createWriteStream(filePath);
      https.get(url, function(response) {
      response.pipe(file);
  })}


getRepoContributors("jquery", "jquery", downloadImageByURL)

