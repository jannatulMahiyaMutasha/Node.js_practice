// http server
const http = require('http');
const server = http.createServer(function (req,res) {
res.end("Hello World");
});

server.listen(5059);
console.log("Server Run Success");
