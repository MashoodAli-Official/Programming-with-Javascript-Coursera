// Built-in Data Structures:
// Arrays - Ordered collections with push/pop operations
// Objects - Key-value pairs for structured data
// Sets - Collections of unique values
// Maps - Key-value pairs with any data type as keys

// Abstract Data Structures:
// Stack - LIFO structure using arrays
// Queue - FIFO structure using arrays
// Linked List - Node-based linear structure
// Hash Table - Key-value storage
// Binary Tree - Hierarchical node structure

// ===== DATA STRUCTURES IN JAVASCRIPT =====

// 1. ARRAYS - Ordered collection of elements
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');           // Add to end
fruits.unshift('mango');        // Add to beginning
fruits.pop();                   // Remove from end
fruits.shift();                 // Remove from beginning

// 2. OBJECTS - Key-value pairs
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
person.email = 'john@email.com'; // Add property
delete person.age;               // Remove property

// 3. SETS - Unique values collection
let uniqueNumbers = new Set([1, 2, 3, 3, 4]);
uniqueNumbers.add(5);
uniqueNumbers.delete(2);
console.log(uniqueNumbers.has(3)); // true

// 4. MAPS - Key-value pairs with any key type
let userRoles = new Map();
userRoles.set('john', 'admin');
userRoles.set('jane', 'user');
console.log(userRoles.get('john')); // 'admin'

// 5. STACK (using Array) - LIFO (Last In, First Out)
let stack = [];
stack.push(1);    // Add
stack.push(2);
stack.pop();      // Remove last

// 6. QUEUE (using Array) - FIFO (First In, First Out)
let queue = [];
queue.push(1);    // Add to end
queue.push(2);
queue.shift();    // Remove from beginning

// 7. LINKED LIST (Simple implementation)
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    add(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

// 8. HASH TABLE (using Object/Map)
let hashTable = {};
hashTable['key1'] = 'value1';
hashTable['key2'] = 'value2';

// 9. TREE (Simple Binary Tree)
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 10. COMMON OPERATIONS EXAMPLES
let data = [3, 1, 4, 1, 5, 9, 2, 6];

// Search
let found = data.find(x => x === 5);

// Filter
let evens = data.filter(x => x % 2 === 0);

// Sort
let sorted = [...data].sort((a, b) => a - b);

// Map/Transform
let doubled = data.map(x => x * 2);

// Reduce
let sum = data.reduce((acc, curr) => acc + curr, 0);

console.log('Original:', data);
console.log('Found:', found);
console.log('Evens:', evens);
console.log('Sorted:', sorted);
console.log('Doubled:', doubled);
console.log('Sum:', sum);