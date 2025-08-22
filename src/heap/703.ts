/* 703. kth largest element in a stream */
// #: heap
import { MinPriorityQueue } from "datastructures-js";

class KthLargest {
    private readonly queue: MinPriorityQueue<number>;
    private readonly k: number;

    constructor(k: number, nums: number[]) {
        const heap = this.queue = new MinPriorityQueue();
        this.k = k;

        for (const num of nums)
            heap.enqueue(num);

        while (heap.size() > k)
            heap.dequeue();
    }

    add(val: number): number {
        const heap = this.queue;
        heap.enqueue(val);

        if (heap.size() > this.k)
            heap.dequeue();

        return heap.front()!;
    }

    public static main(): void {
        // init KthLargest & add arguments
        const solution = new KthLargest(3, [1, 2, 3, 3]);
        const args: number[] = [3, 5, 6, 7, 8];

        // calculate kth largest value of the stream
        const ans: number[] = [];

        for (const val of args)
            ans.push(solution.add(val));

        console.log(ans.join(" "));
    }
}

KthLargest.main();