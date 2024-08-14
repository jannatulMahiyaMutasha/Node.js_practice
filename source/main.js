// http server
var http = require('http');
var server = http.createServer(function (req,res) {
      res.end("Hello World");
});

//server.listen(5059);
//console.log("Server Run Success");


//URL Module
var http = require('http');
var URL=require('url');

var server = http.createServer(function (req,res) {

      var myURL="http://rabbil.com/blog.html?year=2020&month=july";

      var myURLObj= URL.parse(myURL, true);

      var myHostName=myURLObj.hostname;
      var myPathName= myURLObj.pathname;
      var mySearchName= myURLObj.search;

      res.writeHead(200,{'content-type':'text/html'})
      res.write(myHostName);
      res.write(myPathName);
      res.write(mySearchName);
      res.end();

});

server.listen(5059);
console.log("Server Run Success");
