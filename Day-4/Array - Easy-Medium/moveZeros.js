let arr = [0]

let p1=0

for(let i=0; i< arr.length; i++)
{
    if(arr[i]!==0)
    {
        arr[p1] = arr[i]
        p1++
    }
}

for(let i = p1; i<arr.length; i++)
{
    arr[i] = 0
}

console.log(arr)