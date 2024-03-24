const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to our homepage")
    }
    else if(req.url==='/about'){
        res.end("here is out short history")
    }else{
    res.end(`
    <h1>Oops!</h1>
    <h1>Page not found</h1>
    <a href="/">back home</a>
    `)
    }
})

server.listen(5000)