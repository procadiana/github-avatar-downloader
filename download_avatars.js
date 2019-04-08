var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
      'Authorization':GITHUB_TOKEN
    }
  };

  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  request(url, function(err, res, body) {
    cb(err, body);
  });
}


// function getAvatar (options, callback) {
//   var https = require('https');
//   var fs = require('fs');
//   var args = process.argv.slice(2);

//   request.get('https://sytantris.github.io/http-examples/future.jpg')
//        .on('error', function (err) {
//          throw err;
//        })
//        .on('response', function (response) {
//          console.log();
//        })
//        .pipe(fs.createWriteStream('./avatars/'));

// }

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});