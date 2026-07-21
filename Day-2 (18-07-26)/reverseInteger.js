let num = 100000

let numCopy = num

num = Math.abs(num)
let rev = 0
while(num>0)
{
    let rem = num % 10
    rev = (rev*10) + rem
    num = Math.floor(num / 10)
}

let limit = Math.pow(2,31)
if(rev < -limit || rev > limit)
{
    console.log(0);
}

console.log(numCopy > 0 ? rev : -rev); 