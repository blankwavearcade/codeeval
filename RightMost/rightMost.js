var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    var rightMost = line.split(',');
    var line = rightMost[0];
    console.log(line.lastIndexOf(rightMost[1]));
  }
});




