//Modules - encapsulated code; every file in node is a module
//Examples:
/**
 *      OS
 *      Path    -
 *      FS
 *      HTTP
 */
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//path.resolve gets an absolute path from a path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)