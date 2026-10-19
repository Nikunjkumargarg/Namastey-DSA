let arr = [12,1,23,4,32,4,32,21]
function sumArray(n)
{
    if(n < 0) return 0
    return arr[n] + sumArray(n-1)
}

console.log(sumArray(arr.length-1))