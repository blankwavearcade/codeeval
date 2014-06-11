var fs  = require("fs");
var arr  = { 'zero' : 0, 'one' : 1,
  'two' : 2, 'three' : 3,
  'four' : 4, 'five' : 5,
  'six' : 6, 'seven' : 7,
  'eight' : 8, 'nine' : 9,
  'ten' : 10 };
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var nums = line.split(";");
    var num = '';
    var len = nums.length;
    for(var i = 0; i < len; i++) {
      num += arr[nums[i]];
    }
    console.log(num);
  }
});
