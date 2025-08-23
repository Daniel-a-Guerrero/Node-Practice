/**
 * event loop: nonblocking operations by offloading operations to the system kernel whenever possible
 * Event loop explained:
 *      Users send in requests
 *      If there's a time-consuming event, it registers a callback
 *      Only when the operation is complete, it executes
 */
const http=require('http')
const server = http.createServer((req, res)=>{
    console.log(`request event: ${req.method}, ${req.url}`)
    if(req.url==='/'){
    res.end('Hello World!'
        )
    }
    else if(req.url==='/about'){
        res.end('About')
    }
    else{
        req.end('Error');
    }
})

server.listen(5000, ()=>{
    console.log('server listening on port 5000...')
    
})