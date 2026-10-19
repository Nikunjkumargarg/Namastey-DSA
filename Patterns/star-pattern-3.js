let n = 5
for(let i=n; i>0; i--)
{
    let row = ""
    for(let j=0; j<i; j++)
    {
        row = row + (j+1)
    }

    console.log(row)
}

// 12345
// 1234
// 123
// 12
// 1