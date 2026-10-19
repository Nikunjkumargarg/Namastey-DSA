// Traversing approach through out linked list

// function middleNode(head) {
//     if (!head) {
//         return null;
//     }

//     let count = 0;
//     let curr = head;

//     // Count total nodes
//     while (curr !== null) {
//         count++;
//         curr = curr.next;
//     }

//     let mid = Math.floor(count / 2);

//     let curr1 = head;

//     // Move to the middle node
//     for (let i = 0; i < mid; i++) {
//         curr1 = curr1.next;
//     }

//     return curr1;
// }

//Slow and Fast pointer approach (slow - one step, fast - two steps)

var middleNode = function(head){
    let slow = head
    let fast = head
    // let slow = fast = head

    while(fast != null && fast.next != null)
    // while(fast && fast.next)
    {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}