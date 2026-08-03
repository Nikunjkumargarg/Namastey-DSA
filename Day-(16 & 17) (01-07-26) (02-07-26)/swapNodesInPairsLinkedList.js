//Approach 1: iterative approach

function swapNodesInpairs(head)
{
    if(!head && !head.next)
    {
        return head
    }

    let dummy = new ListNode()

    dummy.next = head

    let prev = dummy
    let c = head
    let n = head.next

    while(n && c)
    {
        prev.next = n
        c.next = n.next
        n.next = c

        prev = c
        c = c.next
        n = c && c.next

    }

    return dummy.next
}