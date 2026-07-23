//Pre-requisites
// 1. array should be sorted
// find the mid and compare with target and adjust the left and right values per target.
// base case is if right greater than left that means target not present or not found.
let arr = [2]
let target = 2


function search(arr,target)
{
    let left = 0
    let right = arr.length-1

    while(left<=right)
    {
    let mid = Math.floor((right+left)/2)

    if(arr[mid] === target)
    {
        return mid
    }
    else if(arr[mid] > target)
    {
        right = mid -1
        
    }
    else 
    {
        left = mid + 1
    }
    }
    return -1
}

console.log(search(arr,target))

// time complexity = o(log n)
// space complexity = o(1)