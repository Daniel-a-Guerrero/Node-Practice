//Modules - encapsulated code; every file in node is a module
//Examples:
/**
 *      OS
 *      Path
 *      FS      - "The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions"
 *      HTTP
 */
//Asynchronous
//within a callback
const {readFile, writeFile} = require('fs');
console.log("ME!")
readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(result)
    const first=result
    readFile('./content/second.txt', 'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
    //console.log(result)
    const second = result;
    writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}, ${second}`
        ,(err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Done")
        }
    )
    })
})
console.log("What's next?")//goes before readFile because it's lighter