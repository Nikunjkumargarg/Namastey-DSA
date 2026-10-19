
var MyStack = function() {
    this.queue1 = []
    this.queue2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.queue1.length
    for(let i=0; i<n-1; i++)
    {
        this.queue2.push(this.queue1.shift())
    }
    let deleteItem = this.queue1.shift()

    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp

    return deleteItem
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.queue1.length

    for(let i=0; i<n-1; i++)
    {
        this.queue2.push(this.queue1.shift())
    }

    let topItem = this.queue1.shift()
    this.queue2.push(topItem)

    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp

    return topItem
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */