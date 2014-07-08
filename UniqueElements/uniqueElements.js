var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    line = line.split(",");
    for(var i = 0; i < line.length; i++) {
      for(var k = 0; k  < line.length; k++) { 
        if(line[k] == line[k+1]) {
          line.splice(k+1, 1);
        }else if(line[k] == line[k-1]) {
          line.splice(k-1, 1);
        }
      }
    }
    console.log(line.join(","));
  }
});



