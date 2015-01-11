var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var len = line.split(';')[0];
    var arrs = line.split(';')[1].split(',').sort(function(a,b){return a-b; });
    for(var j = 0; j < len; j++) { 
      if(arrs[j] == arrs[j+1]) {
          var done = arrs[j+1];
          break;
        }
    }
    console.log(done);
  }
});
