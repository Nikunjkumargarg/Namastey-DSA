let arr = [7,1,5,12,-10,0,4,3,2]

function insertionSort(arr)
{
    for(let i=1; i<arr.length; i++)
    {
        let curr = arr[i]
        let prev = i-1

        while(curr < arr[prev] && prev >=0)
        {
            arr[prev+1] = arr[prev]
            prev--
        }

        arr[prev+1] = curr
    }
    return arr
}

console.log(insertionSort(arr))

// Note: why we taking curr value as value of index and not index itself, because on each shift we
// overwrite the value present at current index and if we use index not value then we will lose the
// current actual index value after shifting element towards right