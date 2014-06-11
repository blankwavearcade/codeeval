var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split(", ");
    var rem = lines[1].split("");
    var len = rem.length;
    var end = lines[0];
    for(var i = 0; i < len; i++){ 
      var re = new RegExp(rem[i],"gi");
      end = end.replace(re,"");
    }
    console.log(end.trim());
  }
});
