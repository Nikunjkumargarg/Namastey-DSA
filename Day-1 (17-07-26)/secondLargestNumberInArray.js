const arr = [1,2,3,3,4,5,5,5,5]

function secondLargestNumberInArray(arr)
{
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    if(arr.length < 2)
    {
        return(null)
    }
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > firstLargest)
        {
            secondLargest = firstLargest
            firstLargest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest)
        {
            secondLargest = arr[i]
        }
    }
    return [secondLargest, firstLargest]
}

let result = secondLargestNumberInArray(arr)
console.log(result)