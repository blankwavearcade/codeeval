var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    if(line % 2 === 0) {
      console.log(1);
    } else { 
      console.log(0);
    }
  }
});



