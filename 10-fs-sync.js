//Modules - encapsulated code; every file in node is a module
//Examples:
/**
 *      OS
 *      Path
 *      FS      - "The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions"
 *      HTTP
 */

const {readFileSync, writeFileSync, appendFileSync} = require('fs');
console.log("ME!")

//Time consuming operations
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/resultSync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'})
//Back to simple operations
console.log("Done")
console.log("What's next?")