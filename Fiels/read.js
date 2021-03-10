let fs=require("fs");
let path=require("path");


function readData(filePaths){
    let data="";
    for(let file in filePaths){
        try{
            data += fs.readFileSync(filePaths[file],'utf8');
        
        }
        catch(e){
            console.log('Error',e.stack);
        }
    }
    console.log("The data in the files are:-")
    console.log(data);

}

//readDataInFiles(input);

module.exports={
    readDataInFiles:readData
}