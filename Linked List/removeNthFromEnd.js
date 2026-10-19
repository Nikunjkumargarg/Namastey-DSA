//Approach 1 - traversing linked list twice (1. find length, 2. reaching the position to delete the node)
// time complexity - o(n)
// space complexity - o(1)


// function removeNthFromEnd(head,n)
// {
//     let sentinalNode = new Node()
//     sentinalNode.next = head

//     let length = 0

//     while(head)
//     {
//         length++
//         head = head.next
//     }

//     let prevpos = length-n;
//     let prev = sentinalNode
//     for(let i=0; i<prevpos; i++)
//     {
//         prev = prev.next
//     }
//     prev = prev.next.next
//     return sentinalNode.next
// }

// Approach 2: one pass solution, only one loop (two pointer move the fast pointer by n steps)

function removeNthFromEnd(head,n)
{
    let sentinalNode = new Node()
    sentinalNode.next = head

    let slow = sentinalNode
    let fast = sentinalNode;
    let move = 0
    while(move < n)
    {
        fast = fast.next
        move++
    }

    while(fast && fast.next)
    {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    return sentinalNode.next
}