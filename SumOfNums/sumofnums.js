var fs  = require("fs");
var count = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
     count += parseInt(line,10); 
    }
});
console.log(count);

