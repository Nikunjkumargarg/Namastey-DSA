// STACK - Elements add and delete from the top.

let stack = []

stack.push(3) // insert in stack
stack.push(5)
stack.push(10)
stack.pop() // delete from stack

console.log(stack.length) // length of stack
console.log(stack[stack.length-1]) // top of stack

// stack[3] // invalid stack operation (don't use stack like an array, use stack like push, pop and top)
