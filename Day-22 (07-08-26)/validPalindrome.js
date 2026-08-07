//Approach 1: using reverse javascript method

function validPalindrome(s)
{
    s = s.toLowerCase()
    let rev = ""
    let filteredString =""
    for(let i=0; i<s.length; i++)
    {
        //condition to check the a-z and 0-9
        // if((s[i].charCodeAt() >= 'a' && s[i].charCodeAt() <= 'z') || (s[i].charCodeAt() >= 0 && s[i].charCodeAt() <= '9'))
        if(s[i].match(/[a-z0-9]/i))
        {
            filteredString += s[i]
        }
    }

    rev = filteredString.split("").reverse().join("")
    return filteredString === rev
}

//Approach 2: using loop itself for both filter and reversing the string
function validPalindrome(s)
{
    s = s.toLowerCase()
    let rev = ""
    let filteredString =""

    for(let i=0; i<s.length; i++)
    {
        //condition to check the a-z and 0-9
        // if((s[i].charCodeAt() >= 'a' && s[i].charCodeAt() <= 'z') || (s[i].charCodeAt() >= 0 && s[i].charCodeAt() <= '9'))
        if(s[i].match(/[a-z0-9]/i))
        {
            filteredString = filteredString + s[i]
            rev = s[i] + rev
        }
    }
    return filteredString === rev
}

//time complexity = o(n)
//space complexity - o(n)

