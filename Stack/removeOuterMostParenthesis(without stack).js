// Approach 2: using counter not stack

var removeOutermostParenthesis(s)
{
    let resultString = ""
    let level = -1

    for(let i=0; i<s.length; i++)
    {
        if(s[i] === "(")
        {
            level++
            resultString += ((level) ? s[i] : "")
        }
        else
        {
            resultString += ((level) ? s[i] : "")
            level--
        }
    }
    return resultString
}

// time complexity - o(n) loop
// space complexity - o(n) or o(1) - just for storing the result string not using inside the code