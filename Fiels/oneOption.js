let fs=require("fs");
const readline = require('readline'); 
let helpFileVar = require("./helpFile");

function oneOptionfunc(mode,array){
    if(mode=="-s"){
        removeSpaces(array);
    }
    else if(mode=="-b"){
        numberingLines(array);
    }
    else if(mode=="-n"){
        numberingLinesWithoutSpace(array);

    }
    else{
        helpFileVar.help();
    }
}

function removeSpaces(array){
    for(let filePath in array){
        const file = readline.createInterface({ 
            input: fs.createReadStream(array[filePath]), 
            output: process.stdout, 
            terminal: false
        }); 
    
        file.on('line', (line) => { 
            if(line.length>0)
                console.log(line);
            //count++;
        });
    }

}

function numberingLines(array){
    let count=1;
    for(let filePath in array){
        const file = readline.createInterface({ 
            input: fs.createReadStream(array[filePath]), 
            output: process.stdout, 
            terminal: false
        }); 
    
        file.on('line', (line) => { 
            //if(line.length>0)
            console.log(count,line);
            count++;
            //count++;
        });
    }
}

function numberingLinesWithoutSpace(array){
    let count=1;
    for(let filePath in array){
        const file = readline.createInterface({ 
            input: fs.createReadStream(array[filePath]), 
            output: process.stdout, 
            terminal: false
        }); 
    
        file.on('line', (line) => { 
            if(line.length>0){
                console.log(count,line);
                count++;
            }
                
            //count++;
        });
    }
}

module.exports={
    oneArgFunc:oneOptionfunc
}





