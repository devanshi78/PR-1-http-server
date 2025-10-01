const http = require('http');
const fs = require('fs');
const port = 8081;
const requestHandler = (req,res) => {
    let filename = ' ';
    switch(req.url){
        case '/':
            filename = './index.html'
            break;
        case '/about':
            filename = './about.html'
            break;
        case '/contact':
            filename = './contact.html'
            break;
        case '/blog':
            filename = './blog.html'
            break;
        default:
            filename = './404.html'
    }
    fs.readFile(filename,(err,result)=>{
        if(!err){
            res.end(result);
        }
    })
}

const server = http.createServer(requestHandler);

server.listen(port,(err) => {
    if(!err){
        console.log("server start.");
        console.log('http://localhost:'+port)
    }
})