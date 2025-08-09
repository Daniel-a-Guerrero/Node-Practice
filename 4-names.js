//local
const q = "JQN QTH"
const fun = () =>{
    for(let i=0;i<5;i++)
    {
        for(let j=0;j<5;j++)
        {
            process.stdout.write(`${i+j}\t`)
        }
        console.log();
    }
}
//share
module.exports.x=[[5,-99],[1,0],[-54,1],[191,54]];
module.exports.y=[[4,-23,6],[5,3,-6]];

//module.exports = { x,y }
console.log(module);
fun()