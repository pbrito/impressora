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
//------------------------


var stream3 = fs.ReadStream("my_file.txt");
stream3.setEncoding('ascii');
stream3.on('data', function(data) {
console.log(data);
    //Do something to the file's data mid stream
});
stream3.on('close', function () {
console.log("fechou")
    //Do something to the file once it's finished reading
}
stream.write("My first row\n");

var stream3 = fs.ReadStream("my_file.txt");
stream3.setEncoding('ascii');
stream3.on('data', function(data) {
console.log(data);
    //Do something to the file's data mid stream
});
stream3.on('close', function () {
console.log("fechou")
    //Do something to the file once it's finished reading
}

