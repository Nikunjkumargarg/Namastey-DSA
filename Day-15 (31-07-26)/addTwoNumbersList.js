function addTwoNumbers(l1,l2)
{
    let carry = 0
    let resultNode = new ListNode()
    let initialPos = resultNode
    while(l1 || l2 || carry)
    {
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry
        let carry = Math.floor(sum/10)
        let digit = sum % 10

        let newNode = new ListNode(digit)
        resultNode.next = newNode
        resultNode = resultNode.next

        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return initialPos.next
}