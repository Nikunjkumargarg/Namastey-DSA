let n = 9 

for(let i=1; i<=n; i++)
{
    let row = ""
    for(let j=1; j<=n; j++)
    {
        if(j <= n-i)
        {
            row = row + " "
        }
        else
        {
            row = row + "*"
        }
    }
    console.log(row)
}