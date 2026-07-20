let arr = [1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0]
let x=0
let totalCount = 0

//Approach 1

// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i] === 0)
//     {
//         x = i+1
//     }
//     else
//     {
//         totalCount = Math.max(totalCount, i-x+1)
//     }
// }

// Approach 2

// let currCount = 0
// for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i] === 1)
//         {
//             currCount++
//             totalCount = Math.max(totalCount,currCount)
//         }
//         else
//         {
//             currCount = 0
//         }
//     }

console.log(totalCount)