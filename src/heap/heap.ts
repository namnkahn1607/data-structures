/* data structures: Max Heap & Min Heap */

export class MaxHeap {
    constructor(protected heap: number[] = [0]) {}

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

        const arr: number[] = this.heap;
        const [ans, m] = [arr[1], arr.length];

        arr[1] = arr.pop()!;
        let i = 1;

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

        return ans;
    }

    public isEmpty(): boolean {
        return this.heap.length === 1;
    }

    public top(): number | undefined {
        return (this.isEmpty()) ? undefined : this.heap[1];
    }

    public getHeap(): number[] {
        return this.heap;
    }
}

export class MinHeap extends MaxHeap {
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

    public pop(): number | undefined {
        if (this.isEmpty()) return undefined;

        const arr: number[] = this.heap;
        const [ans, m] = [arr[1], arr.length];

        arr[1] = arr.pop()!;
        let i = 1;

        while (2 * i < m) {
            const [left, right] = [2 * i, 2 * i + 1];
            let lowest = left;

            if (right < m && arr[right] > arr[left])
                lowest = right;

            if (arr[i] > arr[lowest]) {
                [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
                i = lowest;
            } else
                break;
        }

        return ans;
    }
}