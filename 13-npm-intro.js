//NPM will have packages for node projects
//Package, dependencies, module
/**
 * npm - global command comes with node
 * npm --version
 * 
 * local dependency - use it only for this project
 * npm i <packageName>
 * 
 * global dependency - use it in any project
 * npm install -g <packageName>
 * 
 * package.json - manifest file (stores info about project package)
 * manual approach
 * npm init(step by step)
 * npm init -y
 */

//Nodemon watches our files and restarts our apps for us
const _ =require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('New America')