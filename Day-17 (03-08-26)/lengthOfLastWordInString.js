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