//Approach 1
// let n = 10
// let sum = 0
// function FirstN(n)
// {
//     if(n === 0)
//     {
//         return
//     }
//     FirstN(n-1)
//     sum = sum + n
// }
// FirstN(n)
// console.log(sum)

let n = 10

function First(n)
{
    if(n===0) return 0
    return n + First(n-1)
}

console.log(First(n))