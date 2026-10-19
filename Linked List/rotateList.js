function rotateList(head,k)
{
    if(!head || !head.next) return head

    let len = 0
    let curr = head
    while(curr)
    {
        curr = curr.next
        len++
    }
    // To avoid unnecessary rotations
    k = k % len

    if(k===0)
    {
        return head
    }

    let slow = head
    let fast = head

    //move fast pointer k steps ahead
    for(let i=0; i<k; i++)
    {
        fast = fast.next
    }

    // Reaching the end of the list
    while(fast.next)
    {
        slow = slow.next
        fast = fast.next
    }

    let currHead = slow.next
    slow.next = null
    fast.next = head

    return currHead
}