//using extra array space o(m)
let arr1 = [2,7,10,0,0,0]
let arr2 = [1,2,3]
let m = 3
let n = 3
let arr1Pointer = 0
let arr2Pointer = 0
let arr3 = arr1.slice(0,m)


for(let i=0; i<m+n; i++)
{
    if(arr2Pointer >= n || (arr3[arr1Pointer] < arr2[arr2Pointer] && arr1Pointer < m))
    {
        arr1[i] = arr3[arr1Pointer]
        arr1Pointer++
    }
    else 
    {
        arr1[i] = arr2[arr2Pointer]
        arr2Pointer++
    }
}

console.log(arr1)



