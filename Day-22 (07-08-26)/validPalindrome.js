function validPalindrome(s)
{
    s = s.toLowerCase()
    let rev = ""
    let filteredString =""
    for(let i=0; i<s.length; i++)
    {
        if(s[i].match(/[a-z0-9]/i))
        {
            filteredString += s[i]
        }
    }

    rev = filteredString.split("").reverse().join("")
    return filteredString === rev
}