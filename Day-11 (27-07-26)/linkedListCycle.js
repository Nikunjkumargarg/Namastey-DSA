//  Approach one: time complexity - o(n), space complexity - o(n)

//  function listCycle (head)
//  {
//     let nodeSet = new Set()
//     let curr = head

//     while(curr)
//     {
//         if(nodeSet.has(curr))
//         {
//             return true
//         }
//         nodeSet.add(curr)
//         curr = curr.next
//     }
//     return false
//  }

// Approach two: Using Floyd's cycle finding algorithm.
// Two pointers : (if cycle exists, then slow point == fast pointer at some point in time)
// slow and fast pointer approach
// Time complexity - o(n), space complexity - o(1)

function listCycle(head)
{
    let slow = head
    let fast = head

    while(fast && fast.next)
    {
        slow = slow.next // move one step
        fast = fast.next.next // move two step
        if(slow === fast)
        {
            return true
        }
    }
    return false
}

