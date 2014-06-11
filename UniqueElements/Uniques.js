var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    var numbers = line.trim().split(",");
    var newAr = [];
    var len = numbers.length;
    console.log(line);
    for(var i = 0; i != len - 1;i++){
      if(numbers[i+1] == 'undefined') {
        break;
      }else if(numbers[i] === numbers[i+1]){
        console.log(numbers[i]);
        numbers.shift();
      }else {
        newAr.push(numbers[i]);
        numbers.shift();
      }
    }
    console.log(newAr.join(","));
  }
});


