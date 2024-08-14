var fs= require('fs');
var http= require('http');

    var server = http.createServer(function (req, res) {

if(req.url=="/") {
    /*//Asy
    fs.readFile('Home.html',function (error,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();

    });*/

/*   // sync
    let mydata=fs.readFileSync('Home.html');
    res.writeHead(200,{'content-type':'text/html'});
    res.write(mydata);
    res.end();

 */

   /* //fs File Write Async
    fs.writeFile('demo.txt','Welcome to Node js',function (error){
        if(error){
            res.writeHead(200,{'content-type':'text/html'});
            res.write("File Write Fail");
            res.end();
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write("File Write Success");
            res.end();
        }
    });
*/

/*
    //fs File Write Sync
    let error= fs.writeFileSync('demoSync.txt','Welcome to File Sync');

    if(error){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("File Write Fail");
        res.end();
    }
    else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("File Write Success");
        res.end();
    }
*/
    /*
    // fs File Rename Async
    fs.rename('demoNew.txt','demoNewO.txt',function (error){
        if(error){
            res.writeHead(200,{'content-type':'text/html'});
            res.write("File Rename Fail");
            res.end();
        }
        else {
            res.writeHead(200, {'content-type': 'text/html'});
            res.write("File Rename Success");
            res.end();
        }
    })

     */
/*
    //fs File Rename Sync
    let error = fs.renameSync('demoSyncNew.txt','demoSyncNewNew.txt');

    if(error){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("File Rename Fail");
        res.end();
    }
    else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("File Rename Success");
        res.end();
    }
*/

/*
    //fs File Delete Async
    fs.unlink('demoNewO.txt',function (error){
        if(error){
            res.writeHead(200,{'content-type':'text/html'});
            res.write("File Delete Fail");
            res.end();
        }
        else {
            res.writeHead(200, {'content-type': 'text/html'});
            res.write("File Delete Success");
            res.end();
        }
    })
*/

    /*
    // fs File Delete Sync
    let error= fs.unlinkSync('demoSyncNewNew.txt');

    if(error){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("File Delete Fail");
        res.end();
    }
else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("File Delete Success");
        res.end();
    }

     */
/*
    // fs File Exists Sync
    let result= fs.existsSync('Home.html');
    if(result){
        res.end("True");
    }
    else {
        res.end("False");
    }

 */
    /*

    // fs File Exists Async
     fs.exists('Home.html',function (result) {

         if(result){
             res.end("File Here");
         }
         else {
             res.end('File Not Here');
         }
     });
*/

    // Create Simple Website And Deploy To Real Server

}

});

server.listen(40080);
console.log("Server Run Success");