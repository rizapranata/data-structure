class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    printList() {
        let temp = this.head;
        // console.log(temp);
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;  //-> pre digunakan untuk menyimpan nilai kedua terakhir
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) { // 1 -> 2 -> 3
            this.head = null;
            this.tail = null
        }
        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        // temp.next = null;
        // console.log(temp);
        // return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head; // 1 -> 2 -> 3
        for (let i = 0; i < index; i++) {
            temp = temp.next;           
        }
        return temp;
    }

    set(index, value){
        if(index < 0 || index >= this.length) return undefined;
        let prev = this.get(index - 1);
        prev.next = new Node(value);
        prev = prev.next;
        console.log(prev);
        // return prev;
    }

    insert(index, value){
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index - 1);
        
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
}
 
function test() {
    let myLinkedList = new LinkedList();
    // myLinkedList.makeEmpty();
    myLinkedList.push(1);
    myLinkedList.push(2);
    myLinkedList.push(3);
    
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    // myLinkedList.unshift(4);
    // myLinkedList.shift();
    myLinkedList.insert(1, 10)
    myLinkedList.printList();
    // console.log(myLinkedList.get(1).value);
    // myLinkedList.pop();
}




test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/