let fs=require("fs");
let path=require("path");
let readline = require('readline'); 
let readData=require("./Fiels/read.js");
let oneOption=require("./Fiels/oneOption");
let helpFileVar = require("./Fiels/helpFile");
let twoOptionVar = require("./Fiels/twoOption")

let input=process.argv.slice(2);
let count=0;
for(let i=0;i<input.length;i++){
    if(input[i].length==2){
        count++;
    }
    else{
        break;
    }
}

let filePaths=input.slice(count);

//console.log(filePaths);
switch(count){
    case 0:
        readData.readDataInFiles(filePaths);
        break;
    case 1:
        oneOption.oneArgFunc(input[0],filePaths);
        break;
    case 2:
        twoOptionVar.twoArgFunction(input[0],input[1],filePaths);
        break;
    default:

        helpFileVar.help();
        //write help function to understand the commands
}
