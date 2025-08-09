
const matrices=require('./4-names')
const multFunctions=require('./5-utils')
const data = require('./6-alternative-flavor')

const x=matrices.x
const y=matrices.y

console.log(data)

multFunctions.canMult(x,y)
const columbo = multFunctions.getColumn(y)
console.log(columbo)
require('./4-names')