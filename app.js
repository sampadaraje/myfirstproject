var http = require('http');
/*var config=require("./config.js");*/
var AWS = require('aws-sdk');
var fs = require('fs');
var S3 = new AWS.S3();

var myBucket = 'demo-sampada-bucket';
var myKey = 'demo.txt'+Date.now();

//configuring the AWS environment
/*AWS.config.update({
    accessKeyId: "AKIAIXBTXMMX54GWZADA",
    secretAccessKey: "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"
  });*/

/*  var createparams = {
              Bucket: myBucket
  }

console.log('creating bucket..');
S3.createBucket(createparams,function(err,data){
  if(err){console.log('error in creating bucket:');
          console.log(err);
        }
  else{console.log('created bucket');}
});
*/
console.log("Upload will start. Please hit localhost and wait....");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    fs.readFile('demo.txt',function(err,data){
    if(err) { console.log(err);}
    params = {Bucket: myBucket, Key:myKey, Body:data};
    S3.putObject(params,function(err,data){
    if (err){console.log(err);}
    else{console.log("Upload successful")};

    });

  });

    res.end('Upload Completed!');

}).listen(process.env.PORT);
/*}).listen(2000); */
