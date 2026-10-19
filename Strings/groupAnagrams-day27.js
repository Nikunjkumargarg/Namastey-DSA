//Approach 2: without sorting

function groupAnagrams(strs)
{
    let map = {}
    for(let i=0; i<strs.length; i++)
    {
        let s = strs[i]
        let frequencyArr = Array(26).fill(0)
        for(let j=0; j<s.length; j++)
        {
            let index = s[j].charCodeAt() - 'a'.charCodeAt()
            frequencyArr[index]++
        }

        let key = frequencyArr.join("#")

        if(!map[key])
        {
            map[key] = [s]
        }
        else
        {
            map[key].push(s)
        }
    }

    return [...Object.values(map)]
}

//time complexity - o(n*m)
//space complexity - o(n*m)