arr = [12,23,2,1,32,34,2,2,43,222,344]
let largest = 0
function largestNumberInArray(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > largest)
        {
            largest = arr[i]
        }
    }
    return largest
}

largestNumberInArray(arr)
console.log(largest)