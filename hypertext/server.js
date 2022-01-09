const http = require('http'); // core node module

const todos=[
    {id:1, text: 'Todo One'},
    {id:2, text: 'Todo Two'},
    {id:3, text: 'Todo Three'}
]

const server=http.createServer((req,res)=>{
    // res.setHeader('Content-Type','application/json')
    // res.statusCode=404
    // res.setHeader('X-Pwered-By','Node.js')
    
    //THE BOTTOM LINES DO THE EXACT SAME THING AS THE ABOVE COMMENTED ONES

    res.writeHead(404,{
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    })

    let body=[]

    console.log(req.headers.authorization)
    req.on('data',chunk=>{
        body.push(chunk)
    }).on('end',()=>{
        body=Buffer.concat(body)
        console.log(body)
    })

    res.end(JSON.stringify({
        success: false,
        error: 'Not Found',
        data: null
    }))
});
const PORT =5000;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

/*
Important HTTP status codes

1xx - informational

2xx - Success
200 - Success
201 - Created
204 - No Content

3xx - Redirection
304 - Not Modified

4xx - Client Error
400 - Bad Request
401 - Unauthorized
404 - Not Found

5xx - Server Error
500 - Internal Server Error

*/