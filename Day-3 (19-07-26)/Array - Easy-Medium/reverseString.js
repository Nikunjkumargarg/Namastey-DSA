let arr = ["h","e","l","l","o"]

function reverseString(arr)
{
    let halfLength = Math.floor(arr.length/2)
    
    for(let i=0; i<halfLength; i++)
    {
        let tempValue = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = tempValue
    }
    return arr
}

console.log(reverseString(arr))