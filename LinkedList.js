class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    // create a new node item in the head
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    // if list is empty
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      // start at the beginning of the list
      let tempNode = this.head;
      // iterate through the array
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // set the last item in the arrays 'next' pointer to the new item and set that items 'next' pointer to null
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(newItem, beforeItem) {
    // if list is empty
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }
    // start at the beginning of the list
    let currNode = this.head;
    let previousNode = this.head;
    // iterate through the array until the item we're inserting before
    while (currNode !== null && currNode.value !== beforeItem) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    // return null if not present in array
    if (currNode === null) {
      this.insertLast(newItem);
      return;
    }
    // set the node to the new item and a 'next' pointer the the current node or node we're inserting before
    const tempNode = new _Node(newItem, currNode);

    previousNode.next = tempNode;
  }

  insertAfter(newItem, afterItem) {
    // if list is empty
    if (this.head == null) {
      this.insertFirst(newItem);
      return;
    }
    // set node to the item we're inserting after
    let currNode = this.find(afterItem);
    // if node we're inserting after is not in the array, add it to the end of the list
    if (currNode === null) {
      this.insertLast(newItem);
      return;
    }

    const tempNode = new _Node(newItem, currNode.next);

    currNode.next = tempNode;
  }

  insertAt(item, position) {
    // if list is empty
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    // start at the beginning of the list and set the position of the node
    let currNode = this.head;
    let currPosition = 1;
    // iterate through the array until it reaches array index provided as 'position'
    while (currPosition < position - 1) {
      currNode = currNode.next;
      currPosition++;
    }

    const tempNode = new _Node(item, currNode.next);

    currNode.next = tempNode;
  }

  find(item) {
    // start at the head/first item in the array
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // iterate through the array and check for the item
    while (currNode !== item) {
      // return null if item is not present in array
      if (currNode.next === null) {
        return null;
      } else {
        // otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // found it
    return currNode;
  }

  remove(item) {
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // if the head is the node being removed, make the next node the head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.find('Husker');
  SLL.remove('Husker');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  return SLL;
}

console.log(main());
