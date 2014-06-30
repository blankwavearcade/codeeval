var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var string = line.split("");
    var ups = 0;
    var lows = 0;
    for(var i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()) {
        ups++;
      }else if(string[i] === string[i].toLowerCase()) {
        lows++;
      }
    }
    ups = parseFloat(ups/string.length * 100).toFixed(2);
    lows = parseFloat(lows/string.length * 100).toFixed(2);
    console.log("lowercase: " + lows + " uppercase: " + ups);
  }
});


