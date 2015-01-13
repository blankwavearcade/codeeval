var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split(" ");
    var ending = [];
    var dist = [];
    for(var i = 0; i < line.length; i++) { 
      dist.push(+line[i].split(',')[1].replace(';','')); 
    }
    dist = dist.sort(function(a,b) { return a-b; });
    ending = [dist[0]];
    for(var i = 1; i < dist.length; i++) {
        ending.push(dist[i] - dist[i-1]); 
    }
    console.log(ending.join(','));
  }
});

 
