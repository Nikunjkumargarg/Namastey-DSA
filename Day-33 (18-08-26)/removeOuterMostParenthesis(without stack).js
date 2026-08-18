// Approach 2: using counter not stack

var removeOutermostParenthesis(s)
{
    let resultString = ""
    let level = 0

    for(let i=0; i<s.length; i++)
    {
        if(s[i] === "(")
        {
            level++
            resultString += ((level>1) ? s[i] : "")
        }
        else
        {
            resultString += ((level>1) ? s[i] : "")
            level--
        }
    }
    return resultString
}