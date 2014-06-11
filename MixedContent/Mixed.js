var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    line = line.replace(/\r/gm, ""); // For Windows.
    var letsAr = [];
    var numsAr = [];
    var linez = line.split(",");
    for(var i = 0; i < linez.length; i++) {
      if(/[a-z]/gi.test(linez[i])){
        letsAr.push(linez[i]);
      }else{
        numsAr.push(linez[i]);
      }
    }
    if(letsAr.length <1) {
      console.log(numsAr.join(",")); 
    }else if (numsAr.length <1){ 
      console.log(letsAr.join(","));
    }else{
      console.log(letsAr.join(",") + "|" + numsAr.join(","));
    }
  }
});

