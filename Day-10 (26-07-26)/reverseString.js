// Approach 1 - use language built in function. but not accepted mostly by interviewers. (lang agnostic sol.)

let s = "   fly me to    the moon   "

// s = s.trim()
// s = s.split(" ")
// console.log(s[s.length-1].length)


// Approach 2 - Without using built-in functions, start traversing from back

function reverseString(s)
{
    let i = s.length-1
    let count = 0

    while(s[i] === " " && i >= 0)
    {
        i--
    }

    while(i>=0 && s[i] != " ")
    {
        count++
        i--
    }

    return count;
}

console.log(reverseString(s))


