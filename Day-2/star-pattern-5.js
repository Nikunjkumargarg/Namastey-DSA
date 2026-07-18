let n = 5

for(let i=0; i<=n; i++)
{
    let row = ""
    for(let j=0; j<i+1; j++)
    {
        if(j%2 === 0)
        {
            row = row + "1"
        }
        else{

            row = row + "0"
        }
    }
    console.log(row)
}

// 1
// 10
// 101
// 1010
// 10101
// 101010