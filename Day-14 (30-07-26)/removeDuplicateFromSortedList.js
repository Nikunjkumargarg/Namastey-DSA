function deleteDuplicate(head)
{
    let sentinalNode = new Node()
    sentinalNode.next = head

    while(head && head.next)
    {
        if(head.val === head.next.val)
        {
            head.next = head.next.next
        }
        else
        {
            head = head.next
        } 
    }

    return sentinalNode.next
}