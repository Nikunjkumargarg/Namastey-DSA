let arr = [1,4,7,4,3,3,3,7]
let val = 3

function removeElement(arr,val)
{
    let pointer = 0
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] != val)
        {
            arr[pointer] = arr[i]
            pointer++
        }
    }
    return pointer
}

console.log(removeElement(arr,val))