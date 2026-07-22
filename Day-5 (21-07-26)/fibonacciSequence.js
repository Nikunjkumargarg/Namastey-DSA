//Iterative Approach

// function fibonacci(n)
// {
//     if(n === 0) return 0
//     if(n === 1) return 1
//     let preva = 0
//     let prevb = 1
//     let curr = 0
//     for(let i=2; i<=n; i++)
//     {
//         curr = preva + prevb
//         preva = prevb
//         prevb = curr
//     }
//     return curr
// }

// console.log(fibonacci(1))

// Recursive Approach

function fibo(n)
{
    if(n === 1) return 1
    if(n === 0) return 0

    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(9))