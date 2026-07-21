arr = [10,2,3,1,20,6,7,8,9,10]

function maxProfitStocksSelling(arr)
{
    let min = 0
    let maxProfit = 0

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] < arr[min])
        {
            min = i
        }
        else if(arr[i] - arr[min] > maxProfit)
        {
            maxProfit = arr[i] - arr[min] 
        }
    }
    return maxProfit
}

console.log(maxProfitStocksSelling(arr))