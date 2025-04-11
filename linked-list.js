//  --------------- LINKED LIST ----------------------

/* 

linear data structure similar to an array. 
However, unlike arrays, elements are not stored in a particular memory location or index. 
Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node.
The data can be any valid data type. 

 */

const examplelist = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null	
                }
            }
        }
    }
};



// a list node contains two items: the data and the pointer to the next node

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

// implementation of a linked list class with a constructor. 
// Notice that if the head node is not passed, the head is initialised to null.

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

// create a linked list with the class we just created

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

//  create a ll with the node1

let lList = new LinkedList(node1)

// access the nodes in the list we just created

console.log(lList.head.next.data); //returns 5




/* --------------- LINKED LIST METHODS ------------------- */

class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }
}

// example usecase
const list = new LinkedList();
list.head = {
    value: 6,
    next: {
        value: 10,
        next: {
            value: 12,
            next: {
                value: 3,
                next: null
            }
        }
    }
};

console.log(list.size()); // Devuelve el número de nodos presentes
console.log(list.getFirst()); // Devuelve el primer nodo
console.log(list.getLast()); // Devuelve el último nodo
list.clear(); // Vacía la lista
console.log(list.size()); // Debería devolver 0
