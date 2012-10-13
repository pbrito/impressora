var fs = require("fs");
var txt=["um  ","dois","tres"];



fs.open("/dev/usblp0", "w+", 0600, function(err, fd) {
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


//--------

var Buffer = require('buffer').Buffer; 
var buffer = new Buffer(100); 

fs.open("\\\\.\\COM1", "w+", function(status, _fd){ 
  fd = _fd; 
  if(status){ 
    console.log(status.message); 
    return; 
  } 

  fs.read(fd, buffer, 0, 100, null, function(e,l,b){ 
    console.log("Read " + l + " bytes."); 
    return; 
  }); 

}); 

var buf = new Buffer('BBBB\n'); 
var stdin = process.openStdin(); 
stdin.on('data', function(chunk) { 
  // For now I just send the four Bs when [Enter] is pressed. 
  fs.write(fd, buf, 0, buf.length, null, function(err,written){ 
    if(err)throw err; 
    console.log(written + " characters written."); 
  }); 
}); 

//------------

var fs = require('fs'), str = 'string to append to file';
fs.open('filepath', 'a', 666, function( e, id ) {
  fs.write( id, 'string to append to file', null, 'utf8', function(){
    fs.close(id, function(){
      console.log('file closed');
    });
  });
});
