/* data structures: Binary Tree */
import { Queue } from "datastructures-js";

export class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

export class BinaryTree {
    public static createBinaryTree(arr: (number | null)[]): TreeNode | null {
        if (!arr?.length || arr[0] === null || arr[0] === undefined)
            return null;

        const root: TreeNode = new TreeNode(arr[0]);
        const queue = new Queue<TreeNode>([root]);
        let i = 1;

        while (!queue.isEmpty() && i < arr.length) {
            const cur = queue.pop()!;

            if (arr[i] !== null) {
                cur.left = new TreeNode(arr[i]!);
                queue.push(cur.left);
            }

            ++i;

            if (i < arr.length && arr[i] !== null) {
                cur.right = new TreeNode(arr[i]!);
                queue.push(cur.right);
            }

            ++i;
        }

        return root;
    }

    public static convertToArray(root: TreeNode | null): (number | null)[] {
        if (!root) return [null];

        const ans: (number | null)[] = [];
        const queue: (TreeNode | null)[] = [root];
        let i = 0;

        while (i < queue.length) {
            const cur = queue[i++];

            if (cur) {
                ans.push(cur.val);
                queue.push(cur.left);
                queue.push(cur.right);
            } else {
                ans.push(null);
            }
        }

        while (ans.length > 0 && ans[ans.length - 1] === null)
            ans.pop();

        return ans;
    }

    public static searchNode(root: TreeNode | null, target: number): TreeNode | null {
        const stack: (TreeNode | null)[] = [];
        let cur: TreeNode | null = root;

        while (stack.length > 0 || cur) {
            if (cur) {
                if (cur.val === target)
                    return cur;

                stack.push(cur.right);
                cur = cur.left;

            } else {
                cur = stack.pop()!;
            }
        }

        return null;
    }

    public static preOrder(root: TreeNode | null): number[] {
        const arr: number[] = [];

        function dfs(node: TreeNode | null, arr: number[]): void {
            if (!node) return;

            arr.push(node.val);
            dfs(node.left, arr);
            dfs(node.right, arr);
        }

        dfs(root, arr);

        return arr;
    }

    public static inOrder(root: TreeNode | null): number[] {
        const arr: number[] = [];

        function dfs(node: TreeNode | null, arr: number[]): void {
            if (!node) return;

            dfs(node.left, arr);
            arr.push(node.val);
            dfs(node.right, arr);
        }

        dfs(root, arr);

        return arr;
    }

    public static postOrder(root: TreeNode | null): number[] {
        const arr: number[] = [];

        function dfs(node: TreeNode | null, arr: number[]): void {
            if (!node) return;

            dfs(node.left, arr);
            dfs(node.right, arr);
            arr.push(node.val);
        }

        dfs(root, arr);

        return arr;
    }

    public static levelOrder(root: TreeNode | null): number[] {
        if (!root) return [];

        const arr: number[] = [];
        const queue: TreeNode[] = [root];
        let i: number = 0;

        while (i < queue.length) {
            const levelLen: number = queue.length;

            while (i < levelLen) {
                const cur: TreeNode = queue[i++];
                arr.push(cur.val);

                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
            }
        }

        return arr;
    }
}