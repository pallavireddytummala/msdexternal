const { timeStamp } = require('console');
const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const requestListener=function(req,res){
    const current_date=Date();
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    if(req.method=='GET'){
        res.end(`The current date and time is ${current_date}` );
    }
    if(req.method=='POST'){
        res.end("Welcome to Node JS with POST");
    }
}
const server=http.createServer(requestListener);
server.listen(port,hostname);