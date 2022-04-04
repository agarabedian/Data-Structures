/**
 * Queue interface.
 */
interface IQueue<T> {
    add(item: T): void;
    remove(): T;
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
 * Queue DS in Typescript.
 */
class Queue<T> implements IQueue<T> {
    private storage: T[] = [];
    private queueSize = 0;
    constructor(private maxSize: number = Infinity) { }
    /**
     * Add item(s) to the queue.
     *
     * @param items Items to be added.
     */
    public add(...items: any[]): void {
        if (this.size() + items.length > this.maxSize) {
            throw Error('Queue has reached max capacity');
        }
        for (let i of items) {
            this.storage[this.size()] = i;
            this.queueSize++
        }
    }
    /**
     * Remove the first item from the queue (FIFO).
     *
     * @returns The dequeued value.
     */
    public remove(): T {
        if (this.queueSize === 0) {
            throw new Error('Empty queue.');
        }
        else {
            const dequeued = this.storage[0];
            this.queueSize--;
            //Find O(1) solution for dequeueing without using shift() or filter()
            this.storage.shift();
            return dequeued;
        }
    }
    /**
     * Returns the first item in the queue.
     *
     * @returns The first item in the queue.
     */
    public peek(): T | undefined{
        return this.storage[0];
    }
    /**
     * Returns the size of the queue.
     *
     * @returns Size of the queue.
     */
    public size(): number {
        return this.queueSize;
    }/**
     * Clears the queue.
     */
    public clear(): void {
        this.storage = [];
        this.queueSize = 0;
    }
    /**
     * Check if the queue contains the given item.
     *
     * @param item What value is being checked.
     * @returns True or false if the item was found in the queue.
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
     * Checks if the queue is empty.
     *
     * @returns True or false if the queue is empty.
     */
    public isEmpty(): boolean {
        return this.size() === 0;
    }
    /**
     * Searches for the 1-based index of the item in the queue.
     *
     * @param item Item to search.
     * @returns 1-based index of the item in the queue.
     */
    public search(item: T): number {
        for (let i = 0; i < this.size(); i++){
            if (this.storage[i] === item) {
                return i + 1;
            }
        }
        throw new Error('Item not found in queue.');
    }
    /**
     * Returns the current queue as a string.
     *
     * @returns The queue as a string.
     */
    public toString(): string {
        let queueString = '';
        for (let i of this.storage) {
            if (i === this.storage[this.size() -1]) {
                queueString += i;
            }
            else {
                queueString += `${i}, `
            }
        }
        return queueString;
    }
    /**
     * Returns the current queue as an array.
     *
     * @returns The queue as an array.
     */
    public toArray(): T[] {
        let array: T[] = [];
        for (let i in this.storage) {
            array[i] = this.storage[i];
        }
        return array;
    }
    /**
     * Returns the queue as a string with a message.
     */
    public print(): void {
        console.log(`Queue content: ${this.toString()}`);
    }
}

//Testing code
const queue = new Queue();
queue.add(1, 2, 'three');
console.log(`Queued: ${queue.toArray()}`);
console.log(`Dequeued: ${queue.remove()}`);
queue.add(3);
console.log(`Added: ${queue.toArray()[queue.size() - 1]}`);
queue.print();
console.log(`Top of queue: ${queue.peek()}`);
queue.clear();
console.log('Cleared queue');
queue.add(1, 2, 3, 4);
console.log(`Queued: ${queue.toArray()}`);
console.log(`Queue contains 5?: ${queue.contains(5)}`);
console.log(`Queue contains 2?: ${queue.contains(2)}`);
console.log(`Index (1-based) of 4: ${queue.search(4)}`);
console.log(`Queue as string: ${queue.toString()}`);
queue.print();