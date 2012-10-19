//  nao sei utilizar
//-----------------
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

var fs = require("fs");
var stream3 = fs.ReadStream("my_file.txt");
stream3.setEncoding('ascii');
stream3.on('data', function(data) {
console.log("on"+data);
    //Do something to the file's data mid stream
});
stream3.on('close', function () {
console.log("fechou")
    //Do something to the file once it's finished reading
})

var fs = require("fs");
var stream4 = fs.WriteStream("my_file.txt");
stream4.on('data', function(data) {
console.log(data);
    //Do something to the file's data mid stream
});
stream4.on('close', function () {
console.log("fechou")
    //Do something to the file once it's finished reading
});

stream4.write("My first row\n");
fs.open("my_file.txt",'ax+' , function(){})


// --------------------------
deferred
//-------------------------

var jq=require("jquery");

function dump(msg){
    stream4.write('li  ' + msg );
}

function doIn(){
  var defer = jq.Deferred();
   
        stream4.write(": Step " + (1) + " finished.\n \n\n");
        defer.resolve(11);
     
    return defer.promise();
}

function doTask(i,str){
    var defer = jq.Deferred();
    setTimeout(function(){
//        console.log(str+": Step " + (i+1) + " finished.");
         dump(str+": Step " + (i+1) + " finished.");
        defer.resolve(i+1);
    }, Math.random()*1000);
    return defer.promise();
}


var currentStep = doIn();

var ti=function(str){
    console.log("prim");
    for(var i = 1; i < 15; i++){
        currentStep = currentStep.pipe(function(j){
           // if(i==0) return doTask(j+1,str);
            return doTask(j,str);
        });
    }
    jq.when(currentStep).done(function(){
        console.log("All steps done.");
         dump("All steps done.");
    });
};
