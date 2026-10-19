// Approach 1 : Using Stack

function removeOutermostParenthesis(s)
{
    let stack = []
    let resultString = ""

    for(let i=0; i<s.length; i++)
    {
        if(s[i] === "(")
        {
            stack.push(s[i])
            resultString += (stack.length > 1 ? s[i] : "") 
        }
        else
        {
            resultString += (stack.length > 1 ? s[i] : "")
            stack.pop()
        }
    }
    return resultString
}

// time complexity - o(n)
// space complexity - o(n) // stack