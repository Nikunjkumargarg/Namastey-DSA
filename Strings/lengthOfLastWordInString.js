// Approach 1: using two loops

var lengthOfLastWord = function(s)
{
    if(!s) return 0

    let i = s.length-1
    let count = 0

    while(i>=0 && s[i] === " ")
    {
        i--
    }

    while(i>=0 && s[i] != " ")
    {
        i--
        count++
    }

    return count
}

// Approach 2: using one loop

var lengthOfLastWord = function(s)
{
    let i = s.length-1
    let count = 0

    while(i>=0)
    {
        if(s[i] != " ")
        {
            count++
        }
        else if(count > 0)
        {
            break;
        }
        i--
    }
    return count
}