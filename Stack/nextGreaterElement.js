function nextGreaterElement(arr1, arr)
{
    let n = arr.length-1
    let stack = []
    let ngeMap = {}
    let ans = []

    stack.push(arr[n])
    ngeMap[arr[n]] = -1
    for(let i=n-1; i>=0; i--)
    {
        if(arr[i] < stack[stack.length-1])
        {
            ngeMap[arr[i]] = stack[stack.length-1]
        }
        else
        {
            while(stack.length)
            {
                if(stack[stack.length-1] < arr[i])
                {
                    stack.pop()
                }
                else
                {
                    ngeMap[arr[i]] = stack[stack.length-1]
                    break;
                }
            }
            if(stack.length === 0)
            {
                ngeMap[arr[i]] = -1
            }       
        }
        stack.push(arr[i])
    }

    let ans = []
    for(let i=0; i<arr1.length; i++)
    {
        ans.push(ngeMap[arr1[i]])
    }
    return ans
}

// iterate array from the end. 
// time complexity - o(n)
// space complexity - o(n)