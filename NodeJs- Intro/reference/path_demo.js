 const path=require('path');

 //base file name
 console.log(path.basename(__filename));  // here __filename will give you the entire file path

 //directory name
 console.log(path.dirname(__filename)) // here we could also use __dirname

 //file extension
 console.log(path.extname(__filename));

 //create path object
 console.log(path.parse(__filename));

 //concatenate paths
 // suppose we want ../test/hello.html
 console.log(path.join(__dirname,'test','hello.html'));