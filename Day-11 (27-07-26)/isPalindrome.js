function isPalindrome(head)
{
    if(!head || !head.next)
    {
        return true
    }

    //find middle of linked list

    let slow = head
    let fast = head

    while(fast && fast.next)
    {
        slow = slow.next
        fast = fast.next.next
    }

    // if length of linked list is odd then if condition prevent middle node compare two times. but without this condition also algorithm will work correctly for odd length.
    if(fast)
    {
        slow = slow.next
    }

    // reverse second half linked list

    let prev = null
    let curr = slow

    while(curr)
    {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    // compare linked lists
    let first = head
    let second = prev
    while(second)
    {
        if(first.val !== second.val)
        {
            return false
        }
        first = first.next
        second = second.next
    }
    return true
}