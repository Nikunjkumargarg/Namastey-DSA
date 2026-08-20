// function reversePolishNotation(tokens)
// {
//     let operators = ["*","+","-","/"]
//     let stack = []

//     for(let i=0; i<tokens.length; i++)
//     {
//         if(!operators.includes(tokens[i]))
//         {
//             stack.push(Number(tokens[i]))
//         }
//         else
//         {
//             let second = stack.pop()
//             let first = stack.pop()
//             let result = 0

//             switch(tokens[i])
//             {
//                 case "+":
//                     result = first + second
//                     break
//                 case "-":
//                     result = first - second
//                     break
//                 case "/":
//                     result = Math.trunc(first / second)
//                     break
//                 case "*":
//                     result = first * second
//                     break
//             }

//             stack.push(result)
//         }
//     }
//     return stack.pop()
// }

// Syntax clean: switch is replaced with map object
function reversePolishNotation(tokens)
{
    let stack = []
    let operators = {
        "+" : (a,b) => a+b,
        "-" : (a,b) => a-b,
        "/" : (a,b) => Math.trunc(a/b),
        "*" : (a,b) => a*b
    }

    for(let i=0; i<tokens.length; i++)
    {
        if(!operators[tokens[i]])
        {
            stack.push(Number(tokens[i]))
        }
        else
        {
            let second = stack.pop()
            let first = stack.pop()
            let result = operators[tokens[i]](first, second)
            stack.push(result)
        }
    }
    return stack.pop()
}

// Time complexity : o(n)
// Space complexity : o(n)