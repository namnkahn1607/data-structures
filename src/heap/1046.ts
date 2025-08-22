/* 1046. last stone weight */
// #: heap + simulation
import { MaxPriorityQueue, MinPriorityQueue } from "datastructures-js";

class src1046 {
    // 1. max heap
    lastStoneWeight(stones: number[]): number {
        const queue = new MaxPriorityQueue<number>();

        for (const weight of stones)
            queue.enqueue(weight);

        while (queue.size() >= 2)
            queue.enqueue(queue.dequeue()! - queue.dequeue()!);

        return (queue.isEmpty()) ? 0 : queue.front()!;
    }

    // 2. min heap + simulation
    lastStoneWeight2(stones: number[]): number {
        const queue = new MinPriorityQueue<number>();

        for (const weight of stones)
            queue.enqueue(-weight);

        while (queue.size() >= 2)
            queue.enqueue(queue.dequeue()! - queue.dequeue()!);

        return (queue.isEmpty()) ? 0 : -queue.front()!;
    }

    public static main(): void {
        // add stone weights
        const stones: number[] = [2, 3, 6, 2, 4];

        // stone weight remains after clashing
        const solution = new src1046();

        let ans1: number = solution.lastStoneWeight([...stones]),
            ans2: number = solution.lastStoneWeight2([...stones]);

        console.log(`max heap: ${ans1}, min heap: ${ans2}`);
    }
}

src1046.main();