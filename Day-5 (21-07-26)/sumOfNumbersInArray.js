let arr = [5,2,0,3,6,7]

function sumArray(n)
{
    if(n < 0) return 0
    return arr[n] % 2 === 0 ? (0 + sumArray(n-1)) : (arr[n] + sumArray(n-1))
}

console.log(sumArray(arr.length-1))