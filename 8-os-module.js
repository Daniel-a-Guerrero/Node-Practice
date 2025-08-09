//Modules - encapsulated code; every file in node is a module
//Examples:
/**
 *      OS      -
 *      Path
 *      FS
 *      HTTP
 */
const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user.username)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)