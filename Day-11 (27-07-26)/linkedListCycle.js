//  Approach one: time complexity - o(n), space complexity - o(n)

 function listCycle (head)
 {
    let nodeSet = new Set()
    let curr = head

    while(curr)
    {
        if(nodeSet.has(curr))
        {
            return true
        }
        nodeSet.add(curr)
        curr = curr.next
    }
    return false
 }

 