var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split(',');
    console.log(line[0] - line[1] * Math.floor(line[0]/line[1]));
  }
});


