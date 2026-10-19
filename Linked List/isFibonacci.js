// linked list isFibonacci 
var isFibonacci = function(head) {
    if(!head) return false
    let prev = head
    let curr = head.next

    while(curr && curr.next)
    {
        if(prev.val + curr.val === curr.next.val)
        {
            prev = curr
            curr = curr.next
        }
        else
        {
            return false
        }

    }
    return true
};