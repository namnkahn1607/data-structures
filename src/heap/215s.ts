/* 215. kth largest element in an array */
// #: heap
import { MinPriorityQueue } from "datastructures-js";

class src215 {
    // 1. heap
    findKthLargest(nums: number[], k: number): number {
        const queue = new MinPriorityQueue<number>();

        for (const num of nums) {
            queue.enqueue(num);

            if (queue.size() > k)
                queue.dequeue();
        }

        return queue.front()!;
    }

    public static main(): void {
        // add array & k
        const arr: number[] = [2, 3, 1, 5, 5, 4];
        const k: number = 3;

        // calculate kth largest value of array
        let ans: number = new src215().findKthLargest(arr, k);
        console.log(ans);
    }
}

src215.main();

// more sols at: https://neetcode.io/solutions/kth-largest-element-in-an-array