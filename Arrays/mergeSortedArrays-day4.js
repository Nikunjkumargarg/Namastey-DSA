//using no extra array space o(m), more optimum compare to Day-3 solution
let arr1 = [2,7,10,0,0,0]
let arr2 = [1,2,3]
let m = 3
let n = 3
let arr1Pointer = m-1
let arr2Pointer = n-1


for(let i=m+n-1; i>=0; i--)
{
    if(arr2Pointer < 0)
    {
        break;
    }
    if(arr1[arr1Pointer] > arr2[arr2Pointer] && arr1Pointer>=0)
    {
        arr1[i] = arr1[arr1Pointer]
        arr1Pointer--
    }
    else{
        arr1[i] = arr2[arr2Pointer]
        arr2Pointer--
    }
}

console.log(arr1)



