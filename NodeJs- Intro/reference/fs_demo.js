const fs=require('fs');
const path=require('path');

// //create a folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('folder created...');
// })

// //Create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!',err=>{
//     if(err) throw err;
//     console.log('file written to...');
// }) 
//  // the write file overwrites all the previous writes so only the latest write would be shown'
// // in order to append we use fs.appendFile

// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I really love Node.js',err=>{
//     if(err) throw err;
//     console.log('file written to...');
// }) 

//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
         if(err) throw err;
         console.log(data);
});

//rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),(err)=>{
    if(err) throw err;
    console.log('file renamed...');
});