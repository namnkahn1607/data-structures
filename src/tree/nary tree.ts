/* data structures: N-ary Tree */

export class Node {
    constructor(public val: number, public children: Node[] = []) {}
}

export class NaryTree {
    public static createNaryTree(arr: (number | null)[]): Node | null {
        if (!arr?.length || arr[0] === null || arr[0] === undefined)
            return null;

        if (arr.length > 1 && arr[1] !== null)
            throw new Error("Tree can not own multiple roots!");
        else if (arr.length > 2 && arr[1] === null && arr[2] === null)
            throw new Error("Malformed parsing array!");

        const root: Node = new Node(arr[0]);
        const queue: Node[] = [root];
        let i: number = 2;

        for (const parentNode of queue) {
            while (i < arr.length) {
                const val = arr[i++];

                if (val === null) break;

                const childNode = new Node(val);
                parentNode.children.push(childNode);
                queue.push(childNode);
            }
        }

        return root;
    }
}