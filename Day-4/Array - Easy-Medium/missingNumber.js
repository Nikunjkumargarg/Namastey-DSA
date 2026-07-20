let arr = [5,3,2,1,0,6,7,8,9,4]
let n = arr.length
let partialSum = 0
let totalSum = n*(n+1)/2

for(let i=0; i<arr.length; i++)
{
    partialSum = partialSum + arr[i]
}

console.log(totalSum-partialSum)