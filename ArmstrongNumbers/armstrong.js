//776 a+bc
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split("");
    var numLength = line.length;
    var count = 0;
    for(var i = 0; i < numLength; i++) {
     count += Math.pow(line[i], numLength); 
    }
    if(count == line.join("")) {
      console.log('True');
    }else{
      console.log('False');
    }
  }
});

