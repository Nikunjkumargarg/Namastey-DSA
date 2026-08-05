//Approach 1

// function splitInBalancedStrings(s)
// {
//     let result = 0
//     let countLeft = 0
//     let countRight = 0

//     for(let i=0; i<s.length; i++)
//     {
//         s[i] === 'L' ? countLeft++ : countRight++

//         if(countLeft === countRight)
//         {
//             result++
//             countLeft = 0
//             countRight = 0
//         }
//     }
//     return result
// }

//Approach 2:

function splitInBalancedStrings(s)
{
    let temp = 0
    let count = 0
    for(let i=0; i<s.length; i++)
    {
        s[i] === "L" ? temp++ : temp--

        if(temp === 0)
        {
            count++
        }
    }
    return count
}