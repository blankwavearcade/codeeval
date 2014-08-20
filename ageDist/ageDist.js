var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    if(line >= 0 && line <= 2) {
      console.log('Still in Momma\'s arms');
    } else if ( line >= 3 && line <= 4) {
      console.log('Preschool Maniac');
    }else if( line >= 5 && line <= 11) {
      console.log('Elementary school');
    }else if(line >= 12 && line <= 14) {
      console.log('Middle school')
    } else if ( line >= 15 && line <= 18) {
      console.log('High school');
    } else if (line >= 19 && line <= 22){
      console.log('College');
    }else if(line >= 23 && line <= 65) {
      console.log('Working for the man');
    }else if(line >= 66 && line <= 100) {
      console.log('The Golden Years');
    } else { 
      console.log('This program is for humans');
    }
  }
});




