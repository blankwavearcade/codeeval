var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    /*var sum = +line.split(";")[1];
    var nums = line.split(";")[0].split(',');
    var ending = [];
    var numLen = nums.length;
    for(var i = 0; i < nums.length; i++) {
      for(var j = 0; j < nums.length; j++) {
        if(+nums[i] + +nums[j] === sum){
          ending.push([nums[i],nums[j]]); 
        }
      } 
      nums.shift();
    }
    for(var i = 0; i < ending.length; i++) {
      ending[i] = ending[i].sort(function(a,b){ return a-b;});
    }
    console.log((ending.length > 0 ? ending.join(';') : 'NULL'));*/
    console.log(line);
  }
});




