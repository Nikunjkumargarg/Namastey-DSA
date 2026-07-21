arr = [1,2,3,4,5,-2,-34,-1,-45,-6]
let count = 0;

function negativeNumbersCountInArray(arr)
{
    for(let i=0; i< arr.length; i++)
    {
        if(arr[i] < 0)
        {
            count++
        }
    }
}

negativeNumbersCountInArray(arr)
console.log(count)