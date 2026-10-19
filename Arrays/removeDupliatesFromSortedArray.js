//solution 1.
// let arr = [1,2,3,3,4,5,6,6,6,6,6,8,9,10,10]
// let i = 0
// let pointer = 0
// while(i < arr.length -1)
// {
//     if(arr[i] != arr[i+1])
//     {
//         pointer ++
//         arr[pointer] = arr[i+1]
//     }
//     i++
// }

// console.log(pointer+1)

//Note: In above algorithm, if array contains only 1 value then this code will give error "if(arr[i] != arr[i+1])"

let arr = [1,2,3,3,4,5,6,6,6,6,6,8,9,10,10]

function removeDuplicatesFromSortedArray(arr)
{
    let pointer = 0
    if(arr.length<1)
    {
        return 0
    }
    for(let i=0; i< arr.length; i++)
    {
        if(arr[i]>arr[pointer])
        {
            pointer++
            arr[pointer] = arr[i]
        }
    }
    return pointer+1

}

console.log(removeDuplicatesFromSortedArray(arr))
console.log(arr)