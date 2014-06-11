var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  line = line.trim();
  if (line !== "" && line.length !== 0) {
      console.log(parseInt(line).toString(2));
  } 
});
