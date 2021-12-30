const http=require('http');
const path=require('path');
const fs=require('fs');
const { dirname } = require('path');

const server=http.createServer((req,res)=>{
    // if(req.url=='/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(content);
    //     })
    // }
    // if(req.url=='/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(content);
    //     })
    // }
    // if(req.url=='/api/users'){
    //     const users=[
    //         {name: 'Aaron Mathew' , age:20},
    //         {name: 'Akash Singh' , age: 19}
    //     ];
    //     res.writeHead(200,{'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //build file path
    let filepath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url);

    //extension of the file
    let extname=path.extname(filepath);

    //initial content type
    let contenttype='text/html';

    //check the ext and set content type
    switch(extname){
        case '.js':
            contenttype='text/javascript';
            break;
        case '.css':
            contenttype='text/css';
            break;
        case '.json':
            contenttype='application/jason';
            break;
        case '.png':
            contenttype='image/png';
            break;
        case '.jpg':
            contenttype='image/jpg';
            break;
        }

        //read file
        fs.readFile(filepath,(err,content)=>{
            if(err){
                if(err.code=='ENOENT'){
                    //page not found
                    fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.end(content,'utf8');
                    })
                }
                else{
                    // some server error
                    res.writeHead(500);
                    res.end('Server error',err.code);
                }
            }
            else {
                //success
                res.writeHead(200,{'Content-Type':contenttype});
                res.end(content,'utf8')
            }
        });
    });
const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>console.log("Sever running on port ",PORT));