function isIntersection(headA,headB)
{
    let mapSet = new Set()

    while(headA)
    {
        mapSet.set(headA)
        headA = headA.next
    }

    while(headB)
    {
        if(mapSet.has(headB))
        {
            return headB
        }
        headB = headB.next
    }
    return null
}