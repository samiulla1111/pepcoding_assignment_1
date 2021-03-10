
function help(){
    console.log(`
    ************** YOU ENTERED WRONG COMMAND PLEASE FOLLOW THESE FORMAT **************
    1.node wcat file_path ...
    2.node wcat file_path file_path ...
    3.node wcat -n (or) -b (or) -s file_path ... 
    4.mixed of these 3 three in to argumnets for an example
       Ex: node wcat -n -s file_path ...
    `)
}


module.exports={
    help:help
}