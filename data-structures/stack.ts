/**
 * Stack interface.
 */
interface IStack<T> {
    // Methods
    push(item: T): void;
    pop(): T;
    peek(): T | undefined;
    size(): number;
    clear(): void;
    contains(item: T): boolean;
    isEmpty(): boolean;
    search(item: T): number;
    toString(): string;
    toArray(): T[];
    print(): void;
}
/**
 * Stack DS in Typescript.
 */
class Stack<T> implements IStack<T> {
    private storage: T[] = [];
    private stackSize = 0;
    constructor(private maxSize: number = Infinity) { }
    /**
     * Add item(s) to the stack.
     *
     * @param items Items to be pushed.
     */
    public push(...items: any[]): void {
        if (this.size() + items.length > this.maxSize) {
            throw Error('Stack has reached max capacity');
        }
        for (let i of items) {
            this.storage[this.size()] = i;
            this.stackSize++;
        }
    }
    /**
     * Remove the top-most item from the stack (FILO).
     *
     * @returns The popped value.
     */
    public pop(): T {
        if (this.isEmpty()) {
            throw new Error('Empty Stack');
        }
        const popped = this.storage[this.size() - 1];
        this.storage.length -= 1;
        this.stackSize --;
        return popped;
    }
    /**
     * Returns the top-most item in the queue.
     *
     * @returns The top-most item in the queue.
     */
    public peek(): T | undefined {
        return this.storage[this.size() - 1];
    }
    /**
     * Returns the size of the stack.
     *
     * @returns Size of the stack.
     */
    public size(): number {
        return this.stackSize;
    }
    /**
     * Clears the stack.
     */
    public clear(): void {
        this.storage = [];
        this.stackSize = 0;
    }
    /**
     * Check if the stack contains the given item.
     *
     * @param item What value is being checked.
     * @returns True or false if the item was found in the stack.
     */
    public contains(item: T): boolean {
        for (let i of this.storage) {
            if (i === item) {
                return true;
            }
        }
        return false;
    }
    /**
     * Checks if the stack is empty.
     *
     * @returns True or false if the stack is empty.
     */
    public isEmpty(): boolean {
        return this.size() === 0;
    }
    /**
     * Searches for the 1-based index of the item in the stack.
     *
     * @param item Item to search.
     * @returns 1-based index of the item in the stack.
     */
    public search(item: T): number {
        for (let i = 0; i < this.size(); i++){
            if (this.storage[i] === item) {
                return i + 1;
            }
        }
        throw new Error('Item not found in stack.');
    }
    /**
     * Returns the current stack as a string.
     *
     * @returns The stack as a string.
     */
    public toString(): string {
        let stackString = '';
        for (let i of this.storage) {
            if (i === this.peek()) {
                stackString += i;
            }
            else {
                stackString += `${i}, `
            }
        }
        return stackString;
    }
    /**
     * Returns the current stack as an array.
     *
     * @returns The stack as an array.
     */
    public toArray(): T[] {
        let array: T[] = [];
        for (let i in this.storage) {
            array[i] = this.storage[i];
        }
        return array;
    }
    /**
     * Returns the stack as a string with a message.
     */
    public print(): void {
        console.log(`Stack content: ${this.toString()}`);
    }
}

//Testing code
const stack = new Stack();
stack.push(1, 2, 'three', 4);
console.log(`Pushed: ${stack.toArray()}`);
console.log(`Popped: ${stack.pop()}`);
stack.push(3);
console.log(`Pushed: ${stack.peek()}`);
console.log(`Top of stack: ${stack.peek()}`);
stack.clear();
console.log('Cleared stack');
stack.push(1, 2, 3, 4);
console.log(`Pushed: ${stack.toArray()}`);
console.log(`Stack contains 5?: ${stack.contains(5)}`);
console.log(`Stack contains 2?: ${stack.contains(2)}`);
console.log(`Index (1-based) of 4: ${stack.search(4)}`);
console.log(`Stack as string: ${stack.toString()}`);
stack.print();