var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    var obj = {};
    line = line.split('');
    for (var i = 0; i < line.length; i++) {
      if (typeof obj[line[i]] == 'undefined') { 
        obj[line[i]] = 1;
      } else { 
        obj[line[i]] += 1;
      }
    }
    for(key in obj) {
      if(obj[key] == 1) {
        console.log(key);
        break;
      }
    }
  }
});




