var fs  = require("fs");
var lines = [];
var count;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split('');
    if(line.length <= 55) { 
      console.log(line.join('')); 
    }else { 
      for(var i = 0; i < 41; i++) { 
        console.log(line.join('').trim() + '... <Read More>');
      } 
    }
  }
});


