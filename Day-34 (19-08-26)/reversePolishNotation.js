function reversePolishNotation(tokens)
{
    let operators = ["*","+","-","/"]
    let stack = []

    for(let i=0; i<tokens.length; i++)
    {
        if(!operators.includes(tokens[i]))
        {
            stack.push(Number(tokens[i]))
        }
        else
        {
            let second = stack.pop()
            let first = stack.pop()
            let result = 0

            switch(tokens[i])
            {
                case "+":
                    result = first + second
                    break
                case "-":
                    result = first - second
                    break
                case "/":
                    result = Math.trunc(first / second)
                    break
                case "*":
                    result = first * second
                    break
            }

            stack.push(result)
        }
    }
    return stack.pop()
}