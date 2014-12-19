var fs  = require("fs");
var lines = [];
var count;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    if(parseInt(line,10)){
      count = parseInt(line,10); 
    }else{
      lines.push(line);
    }
  }
  lines = lines.sort(function(a, b) {
    return b.length - a.length;
  });
});
for(var i = 0; i < count; i++) {
  console.log(lines[i]);  
}

