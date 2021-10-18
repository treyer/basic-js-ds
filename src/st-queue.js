const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = class Queue {

  constructor(){
    this.firstEl = null;
    this.lastEl = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.size === 0){
      this.firstEl = node;
      this.lastEl = node;
      this.size = 1;
    } else {
      this.lastEl.next = node;
      this.lastEl = this.lastEl.next;
      this.size++;
    }

    return this.firstEl;
  }

  dequeue() {
    if (this.firstEl === null){
      return null;
    } else {
      let elForDeletionVal = this.firstEl.value;
      if (this.firstEl === this.lastEl) this.lastEl === null;
      this.firstEl = this.firstEl.next;
      this.size--;
      return elForDeletionVal;
    }
    
  }

  getUnderlyingList() {
    return this.firstEl;
  }

}
