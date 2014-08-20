var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split(" ");
    console.log(line.sort(function(a,b) { return parseFloat(a) - parseFloat(b);}).join(" "));
  }
});


