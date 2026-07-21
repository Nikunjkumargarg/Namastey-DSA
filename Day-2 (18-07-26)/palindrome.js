let num = 232
let rev = 0
let numCopy = num

if(num < 0)
{
    return false
}
while(num > 0)
{
    let rem = num % 10
    num = Math.floor(num / 10)
    rev = (rev*10) + rem
}

if(numCopy === rev)
{
    console.log(true)
}
else{
    console.log(false)
}