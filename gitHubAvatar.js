

function getAvatar (options, callback) {
  var https = require('https');
  var fs = require('fs');
  var args = process.argv.slice(2);

  request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log();
       })
       .pipe(fs.createWriteStream('./avatars/'));

}