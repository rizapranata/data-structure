class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertHead(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) { // 10 -> 20-> 30 -> null
            current = current.next;
        }
        return current;
    }

    inserAtIndex(value, index) {
        if (index < 0 || index >= this.length) return null;

        const prev = this.getByIndex(index - 1);
        prev.next = new Node(value, prev.next);
        this.length++;
    }

    removeAtIndex(index) {
        if (index < 0 || index >= this.length) return null;

        const prev = this.getByIndex(index - 1);
        prev.next = prev.next.next;
        this.length--
    }

    print() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output} ${current.value} ->`
            current = current.next;
        }
        console.log(`${output} null`);
    }
}

export default LinkedList;