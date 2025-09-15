/* data structure: Max Heap & Min Heap */

class MaxHeap {
    protected readonly heap: number[];

    constructor(nums: number[] = [0]) {
        this.heap = [0, ...nums];
        let cur = Math.trunc((this.heap.length - 1) / 2)

        while (cur > 0)
            this.shrink(cur--);
    }

    public push(val: number): void {
        const arr: number[] = this.heap;
        arr.push(val);

        let i = arr.length - 1;

        while (i !== 1) {
            const parent = Math.trunc(i / 2);

            if (arr[i] > arr[parent]) {
                [arr[i], arr[parent]] = [arr[parent], arr[i]];
                i = parent;
            } else
                break;
        }
    }

    public pop(): number | undefined {
        if (this.isEmpty()) return undefined;

        const [arr, ans] = [this.heap, this.heap[1]];
        arr[1] = arr.pop()!;

        this.shrink(1);

        return ans;
    }

    public isEmpty(): boolean {
        return this.heap.length === 1;
    }

    public top(): number | undefined {
        return (this.isEmpty()) ? undefined : this.heap[1];
    }

    public getHeap(): number[] {
        return this.heap.slice(1);
    }

    protected shrink(i: number): void {
        const [arr, m] = [this.heap, this.heap.length];

        while (2 * i < m) {
            const [left, right] = [2 * i, 2 * i + 1];
            let highest = left;

            if (right < m && arr[right] > arr[left])
                highest = right;

            if (arr[i] < arr[highest]) {
                [arr[i], arr[highest]] = [arr[highest], arr[i]];
                i = highest;
            } else
                break;
        }
    }
}

class MinHeap extends MaxHeap {
    public push(val: number): void {
        const arr: number[] = this.heap;
        arr.push(val);

        let i = arr.length - 1;

        while (i !== 1) {
            const parent = Math.trunc(i / 2);

            if (arr[i] < arr[parent]) {
                [arr[i], arr[parent]] = [arr[parent], arr[i]];
                i = parent;
            } else
                break;
        }
    }

    protected shrink(i: number): void {
        const [arr, m] = [this.heap, this.heap.length];

        while (2 * i < m) {
            const [left, right] = [2 * i, 2 * i + 1];
            let lowest = left;

            if (right < m && arr[right] < arr[left])
                lowest = right;

            if (arr[i] > arr[lowest]) {
                [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
                i = lowest;
            } else
                break;
        }
    }
}