var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = JSON.parse(line);
    var count = 0;
    var menu = line.menu;
    var menuLen = line.menu.items.length;
    for ( var i = 0; i < menuLen; i++) { 
      if(menu.items[i] != null && menu.items[i].id && menu.items[i].label) { 
          count += menu.items[i].id;
      }
    }
    console.log(count);
  }
});
