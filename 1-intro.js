const countdown=(num)=>{
    console.log(num)
    if(num!=1)
    {
        countdown(num-1);
    }
}
const amount=12
if(amount<10)
{
    console.log("Not 1 digit")
}
else
{
    console.log(`${amount} isn't a big number`)
}
console.log("fqllqw thq whqtq rqbbqt")

const funName = countdown;
console.log(`${funName.name}\t${countdown.name}`)
funName(amount)
funName(5)