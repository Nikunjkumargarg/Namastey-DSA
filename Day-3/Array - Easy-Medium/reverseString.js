let arr = ["h","e","l","l","o"]

function reverseString(arr)
{
    let pointer1 = 0
    let pointer2 = arr.length-1

    while(pointer1 != pointer2)
    {
        let tempValue = arr[pointer1]
        arr[pointer1] = arr[pointer2]
        arr[pointer2] = tempValue
        pointer1++
        pointer2--
    }
    return arr
}

console.log(reverseString(arr))