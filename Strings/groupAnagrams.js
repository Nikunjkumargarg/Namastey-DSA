function groupAnagrams(strs)
{
    let map = {}
    for(let i=0; i<strs.length; i++) // n
    {
        let sortValue = strs[i].split("").sort().join("") // mlogm
        if(!map[sortValue])
        {
            map[sortValue] = [strs[i]]
        }
        else
        {
            map[sortValue].push(strs[i])
        }
    }

    return [...Object.values(map)]
}

//time complexity - o(n*mlogm)
//space complexity - o(n*m)