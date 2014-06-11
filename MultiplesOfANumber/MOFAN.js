var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split(",");
    for(var i = 0; i < lines[0]; i++){
      var j = lines[1] * i;
      if(j >= lines[0]) {
        console.log(j);
        break;
      }
    }
  }
});
