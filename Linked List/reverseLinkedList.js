function linkedList(head)
{
    let prev = null
    let curr = head
    while(curr)
    {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr =  temp
    }
    head =  prev // just had to return the pointer to first node. either return prev or head = prev both mean the same
    return head
}