const arr = [12,2,3,3,44,4,3,232,4,45,678]
let firstLargest = -Infinity
let secondLargest = -Infinity
function secondLargestNumberInArray(arr)
{
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
}

secondLargestNumberInArray(arr)
console.log(firstLargest)
console.log(secondLargest)