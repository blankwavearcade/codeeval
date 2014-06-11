var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split(" ");
    var count = lines.pop();
    if(count <= lines.length) {
      console.log(lines[lines.length - count]);
    }
  }
});
