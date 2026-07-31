//Approach 2: not extra list but using the existing lists
// time complexity - o(n)
// space complexity - o(1)

function addTwoNumbers(l1,l2)
{
    let newNode = new ListNode()
    let initialPos = newNode
    while(l1 && l2)
    {

        if(l1.val < l2.val)
        {
            newNode.next = l1
            newNode = newNode.next
            l1 = l1.next
        }
        else
        {
            newNode.next = l2
            newNode = newNode.next
            l2 = l2.next
        }
    }
    newNode.next = l1 || l2
    return initialPos.next
}

//Approach 1: using one more list as the resultant linked list.
// time complexity - o(n) 
// space complexity - o(1)


function addTwoNumber(l1,l2)
{
    let resultList = new ListNode()
    let initialPos = resultList

    while(l1 && l2)
    {
        let value = 0
        if(l1.val < l2.val)
        {
            value = l1.val
            l1 = l1.next
        }
        else
        {
            value = l2.val
            l2 = l2.next
        }
        let newNode = new ListNode(value)
        resultList.next = newNode
        resultList = resultList.next
    }

    resultList.next = l1 || l2
    return resultList.next
}



