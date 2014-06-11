var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    lines = line.split(" ")
    var len = lines.length;
    for(var i = 0; i <= len-1; i++){
      lines[i] = lines[i].charAt(0).toUpperCase() + lines[i].slice(1);
    }
    console.log(lines.join(" "));
  }
});
