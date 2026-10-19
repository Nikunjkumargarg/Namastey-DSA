function rob(val)
{
    let dp = [val[0], Math.max(val[0], val[1])]
    let n = val.length;
    if(n===1) return val[0]
    for(let i=2; i<n; i++)
    {
        dp[i] = Math.max(dp[i-2] + val[i], dp[i-1])
    }

    return dp[n-1]
}

//Time and space complexity is - o(n)

function rob(nums)
{
    let n = nums.length;
    let p2 = nums[0]
    let p1 = Math.max(nums[0], nums[1])
    if(n===1) return nums[0]
    for(let i=2; i<n; i++)
    {
        let curr = Math.max(p2+nums[i], p1)
        p2 = p1
        p1 = curr
    }

    return p1
}

//Time complexity - o(n)
//Space complexity - o(1)