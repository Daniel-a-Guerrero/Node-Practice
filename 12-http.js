//Modules - encapsulated code; every file in node is a module
//Examples:
/**
 *      OS
 *      Path
 *      FS      
 *      HTTP    -Serverside
 */
const http = require('http')

//server object parameters, requests and
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {res.end("Welcome to our home page");
        return;
    }
    if(req.url==='/about'){
        res.end('Here is our short history');
        return;
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you're looking for.</p>
        <a href="/">Back home</a>
    `);
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
