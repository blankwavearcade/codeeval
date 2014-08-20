var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    line = line.replace(/, /g,",");
    line = line.split(" ");
    //split into x,y
    var x = line[0],
      y = line[1];
  
    x = x.replace(/\(|\)/g,"").split(",");
    y = y.replace(/\(|\)/g,"").split(",");
    
    console.log(distance(x,y));
  }
});

function distance(a, b) {
  return  Math.sqrt(Math.pow((a[0] - b[0]),2) + Math.pow((a[1] - b[1]),2));
}
