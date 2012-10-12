var fs = require("fs");
var txt=["um  ","dois","tres"];
fs.open("/dev/usblp0", "w", 0600, function(err, fd) {
	var buf = new Buffer(256);
	var asi="";
	txt.map(function(a){ 
            console.log(a+"  ip  ");
	    asi = asi+' \n '+a+"     " +' \n   ';
	    //fs.writeSync(fd, buf, 0, len, 0);
	    //imprime(a);
	})	
	
	len = buf.write(asi+' \n \x0a \n\n\x1bi\n ');
	fs.writeSync(fd, buf, 0, len, 0);
	console.log("------------------------------------------------");
        
	//  console.log(   buf);
	fs.close(fd, function(err) {     });
    });
