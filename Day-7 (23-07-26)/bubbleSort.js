// Bubble sort time complexity is o(n^2) that is why in production for sorting this algorithm is not
// generally used.

let arr = [0,12,3,4,5,6,23]

function bubbleSort(arr)
{
    let n = arr.length-1
    for(let i=0; i<n; i++)
    {
        let isSwapped = false // if in mid of iterations array get already sorted
        for(let j=0; j<n-i; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSwapped = true
            }
        }
        if(!isSwapped) break;
    }
    return arr
}

console.log(bubbleSort(arr))

//optimisaton:
// if in any point of iteration if we find there is no swapping happened then we have to stop it there,
// no need to proceed with rest iterations becasue that's useless as we got our sorted array already.