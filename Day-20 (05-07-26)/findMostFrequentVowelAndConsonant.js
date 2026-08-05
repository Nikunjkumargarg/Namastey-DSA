function findFrequentVowelAndConsonant(s)
{
    let map = {}
    let vowelMax = 0
    let consonantMax = 0 
    let vowels = ['a','e','i','o','u']

    for(let i=0; i<s.length; i++)
    {
        map[s[i]] ? map[s[i]] = map[s[i]] + 1 : map[s[i]] = 1

    }
    let mapKeys = Object.keys(map)
    for(let i=0; i<mapKeys.length; i++)
    {
        if(vowels.includes(mapKeys[i]))
        {
            vowelMax = Math.max(vowelMax, map[mapKeys[i]])
        }
        else
        {
            consonantMax = Math.max(consonantMax, map[mapKeys[i]])
        }
    }

    return vowelMax + consonantMax
}
