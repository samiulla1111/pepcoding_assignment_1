let fs=require("fs");
let path=require("path");
const readline = require('readline'); 

let input=process.argv.slice(2);
let filePath=input[0];
//let fileArray=filePath.split("\\");
//let fileName=path.basename(filePath);
//console.log(input);

// read the data from more than one file
// for(let filePath in input){
//     try{
//         var data=fs.readFileSync(input[filePath],'utf8');
//     // console.log(input[filePath]);
//         console.log(data);
//         console.log("****************************************");

//     }
//     catch(e){
//         console.log('Error',e.stack);
//     }
// }

//print the data not more than a line

// var data=fs.readFileSync(filePath,'utf8');
// var names = data.toString().split('\n').map(function(line){
//     return line.trim();
// }).filter(Boolean);
    
// console.log(names);

//const fs = require('fs'); 

  
// Creating a readable stream from file 
// readline module reads line by line  
// but from a readable stream only. 
const file = readline.createInterface({ 
    input: fs.createReadStream(filePath), 
    output: process.stdout, 
    terminal: false
}); 
  
// Printing the content of file line by 
//  line to console by listening on the 
// line event which will triggered 
// whenever a new line is read from 
// the stream 


// let count=1;
// file.on('line', (line) => { 
//     if(line.length>0){
//         console.log(count,line); 
//         count++;
//     }
// }
// }); 
