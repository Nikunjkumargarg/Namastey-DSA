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
