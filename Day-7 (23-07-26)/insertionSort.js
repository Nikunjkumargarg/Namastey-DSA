let arr = [7,1,5,12,-10,0,4,3,2]

function selectionSort(arr)
{
    for(let i=0; i<arr.length-1; i++)
    {
        let min = i
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[min] > arr[j])
            {
                min = j
            }
        }

        if(min!=i)
        {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selectionSort(arr))

// Time complexity: o(n^2)
// Space complexity: o(1)
