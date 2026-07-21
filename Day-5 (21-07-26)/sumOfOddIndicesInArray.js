let arr = [5,3,2,0,1,1]
let n =0 
if ((arr.length - 1) % 2 === 0)
{
    n = arr.length - 2
}
else
{
    n = arr.length -1
}

function oddSum(n)
{
    if(n < 0) return 0
    return arr[n] + oddSum (n-2)
}

console.log(oddSum(n))