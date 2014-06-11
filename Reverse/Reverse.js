var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split(" ");
    var len = lines.length;
    var rev = '';
    for(var i = len - 1; i >= 0; i--){
        rev += " " + lines[i];
    }
    console.log(rev);
  }
});
