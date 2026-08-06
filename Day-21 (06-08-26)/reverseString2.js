// Q. Given a string s and an integer k, reverse the first k characters for every 2k
// characters counting from the start of the string

function reverseStr(s,k)
{
    //convert string to array because string is immutable in javascript
    let s = s.split("")
    for(x=0; x<s.length; x=x+(2*k)) // main is to jump the loop by 2k time
    {
        let mid = Math.floor(n/2)

        for(let i=0; i<mid; i++) 
        {
            let temp = s[x+i] // main is to calculate the index to start
            s[x+i] = s[x+n-1-i] // main is to calculate the index of end
            s[x+n-1-i] = temp
        }
    }

    return s.join("")
}