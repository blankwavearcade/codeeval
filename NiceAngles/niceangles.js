var fs  = require("fs");
var count = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
   line = line.split('.');
   var degree = parseInt(line[0]);
   var min = parseFloat((parseFloat('.'+line[1])) * 60);
   var sec = (typeof parseInt(parseFloat('.' + (min.toString().split('.')[1]*60))) === 'undefined' ? sec = '00' : parseInt(parseFloat('.' + min.toString().split('.')[1]*60)));
   //(typeof sec === 'undefined' ? sec = '00' : sec = parseInt(parseFloat('.'+sec)*60));
   (parseInt(min) === 0 ? min = '00' : min = parseInt(min));
   console.log(degree+'.'+min+'\''+sec+'"');
  }
});
