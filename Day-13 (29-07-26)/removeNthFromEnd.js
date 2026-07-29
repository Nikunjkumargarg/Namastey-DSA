function removeNthFromEnd(head,n)
{
    let sentinalNode = new Node()
    sentinalNode.next = head
    let length = 0
    while(head)
    {
        head = head.next
        length++
    }

    let prevpos = (length-n)

    let prev = sentinalNode

    for(let i=0; i< prevpos; i++)
    {
        prev = prev.next
    }
    prev.next = prev.next.next;
    return sentinalNode.next;
}