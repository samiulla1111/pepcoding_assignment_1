let fs=require("fs");
let path=require("path");
let readline = require('readline'); 
let helpFileVar = require("./helpFile");

let oneOptionvar=require("./oneOption");


let input=process.argv.slice(2);
let array=input.slice(1);

// console.log(input[0]);
// console.log(array);

function twoArgFunction(input1,input2,array){
    if(input1=="-b" && input2=="-n"){
        oneOptionvar.oneArgFunc(input1,array);
    }
    else if(input1=="-b" && input2=="-s"){
        oneOptionvar.oneArgFunc(input1,array);
    }
    else if(input1=="-n" && input2=="-b"){
        oneOptionvar.oneArgFunc(input1,array);
    }
    else if(input1=="-n" && input2=="-s"){
        oneOptionvar.oneArgFunc("-b",array);
    }
    else if(input1=="-s" && input2=="-b"){
        oneOptionvar.oneArgFunc(input2,array);
    }
    else if(input1=="-s" && input2=="-n"){
        oneOptionvar.oneArgFunc("-b",array);
    }
    else{
        helpFileVar.help();
    }
}



module.exports={
    twoArgFunction:twoArgFunction
}