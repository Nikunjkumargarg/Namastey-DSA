let arr = [4,9,1,0,2]
let target = 10
function linear(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === target)
        {
            return i
        }
    }
    return "Not Found"
}

console.log(linear(arr))

//Time complexity is o(n)