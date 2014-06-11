var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var nums = '';
  if (line != "") {       
    nums + nums + parseInt(line);
  }
  console.log(nums);
});


