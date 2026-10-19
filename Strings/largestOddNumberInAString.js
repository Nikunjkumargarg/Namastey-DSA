function largestOddNumberInAString(s)
{
    for(let i=s.length-1; i>=0; i--)
    {
        if(s[i] % 2 !== 0)
        {
            return s.substring(0, i+1)
        }
    }

    return ""
}

console.log(largestOddNumberInAString("234123322444"))