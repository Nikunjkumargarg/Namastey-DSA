function validAnagram(s,t)
{
    if(s.length !== t.length)
    {
        return false
    }
    let map = {};

    for(let i=0; i<s.length; i++)
    {
        if(!map[s[i]])
        {
            map[s[i]] = 1;
        }
        else
        {
            map[s[i]]++
        }
    }

    for(let i=0; i<t.length; i++)
    {
        if(map[t[i]] < 0 || !map[t[i]])
        {
            return false
        }
        else
        {
            map[t[i]] --
        }
    }

    return true
}

// Time complexity - o(n)
// Space complexity - o(1) - because map is of alphabets and max size would be "26 max"