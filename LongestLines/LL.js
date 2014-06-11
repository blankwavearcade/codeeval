var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var longLen = 0;
  var LineText = '';
  var kv = [];
  if (line != "") {
    if(!isNaN(line)){
      var count = line;
    }else{
      var objs = { length: line.length, text: line };
      kv.push(objs);
    }
  }
  console.log(kv.sort());
});
