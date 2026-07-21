let arr = [3,1,5,4,1,5,3]

let obj = {}

for(let i=0; i<arr.length; i++)
{
    if(obj[arr[i]])
    {
        obj[arr[i]] = obj[arr[i]]+1
    }
    else
    {
        obj[arr[i]] = 1
    }
}

for(let i=0; i< arr.length; i++)
{
    if(obj[arr[i]] == 1)
    {
        console.log(arr[i])
    }
}