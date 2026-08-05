// Approach 1: Brute force

// function jewelAndStones(jewel, stone)
// {
//     let count = 0
//     for(let i=0; i<stone.length; i++)
//     {
//         if(jewel.includes(stone[i]))
//         {
//             count++
//         }
//     }
//     return count
// }


//Approach 1: not using includes function but loop
// function jewelAndStones(jewel, stone)
// {
//     let count = 0
//     for(let i=0; i<stone.length; i++)
//     {
//         for(let j=0; j<jewel.length; j++)
//         {
//             if(jewel[j] === stone[i])
//             {
//                 count++
//                 break 
//             }
//         }
//     }
//     return count
// }

// Approach 2 : using set
// Set removes duplicates
function jewelAndStones(jewel, stone)
{
    let count = 0
    let set = new Set()

    for(let i=0; i<jewel.length; i++)
    {
        set.add(jewel[i])
    }

    for(let i=0; i<stone.length; i++)
    {
        if(set.has(stone[i]))
        {
            count++
        }
    }
    return count
}

//space complexity - at max the set will have only 52 elements including all a-z and A-Z -> o(1)
//time complexity - o(n)