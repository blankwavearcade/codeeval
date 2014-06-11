var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split("|");
    var nums = lines[1].trim().split(" ");
    var lets = lines[0].split("");
    var len = nums.length;
    var writer = '';
    for(var i = 0; i != len; i++) {
      writer = writer + lets[nums[i] - 1];
    }
    console.log(writer);
  }
});

