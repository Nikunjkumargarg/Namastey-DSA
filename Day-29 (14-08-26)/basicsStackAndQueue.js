// STACK - Elements add and delete from the top.

let stack = []

stack.push(3) // insert in stack
stack.push(5)
stack.push(10)
stack.pop() // delete from stack

console.log(stack.length) // length of stack
console.log(stack[stack.length-1]) // top of stack

// stack[3] // invalid stack operation (don't use stack like an array, use stack like push, pop and top)

// QUEUE - only add elements(enqueue) and it can delete the elements from front(dequeue)
let queue = []

queue.push(3)  // enqueue
queue.push(10)
queue.push(11)
queue.shift()  // dequeue

let front = queue[0]
console.log(queue)
console.log(front)

// queue.pop() // invalid operation in the queue