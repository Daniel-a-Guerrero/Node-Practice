module.exports.canMult=(x,y)=>{
    if(x[0].length==y.length)
    {
        console.log('can multiply')
    }
    else
    {
        console.log('can\'t multiply')
    }
}
module.exports.getColumn=(mat)=>{
    let col=[]
    for(let i=0;i<mat.length;i++)
    {
        col[i]=mat[i][0]
    }
    return col
}

//module.exports={canMult}