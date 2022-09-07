const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end("Home Page");
    }
    else if(req.url === '/about'){
        res.end("About Page");
    }else

    res.end(`
    <h1>OOPS!! Page not found</h1>
    <p>Click the below link to forward to home page</p>
    <a href="/">Go Back<a/>
    `)
   
})

server.listen('5000')