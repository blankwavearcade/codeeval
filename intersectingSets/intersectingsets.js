var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split(';').join(',').split(',').sort(function(a,b) { return a-b; });
    var lineLen = line.length;
    var dupes = [];
    for(var i = 0; i < lineLen; i++) { 
      if(line[i] === line[i+1]) {
        dupes.push(line[i+1]); 
      } 
    }
    (dupes.length > 0 ? console.log(dupes.join(',')) : console.log());
  }
});

