/* 973. k closest points to origin */
// #: heap
import { MinPriorityQueue } from "datastructures-js";

class src973 {
    kClosest(points: number[][], k: number): number[][] {
        const ans: number[][] = [];
        const heap = new MinPriorityQueue<number[]>((
            point => point[0]
        ));

        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            heap.enqueue([dist, x, y]);
        }

        for (let i = 0; i < k; ++i) {
            const val = heap.dequeue()!;
            ans.push([val[1], val[2]]);
        }

        return ans;
    }

    public static main(): void {
        // add Cartesian plane points
        const points: number[][] = [
            [0, 2], [2, 0], [2, 2]
        ];
        const k: number = 2;

        // calculate k smallest Euclidean distance
        let ans: number[][] = new src973().kClosest(points, k);

        for (const point of ans)
            console.log(point);
    }
}

src973.main();