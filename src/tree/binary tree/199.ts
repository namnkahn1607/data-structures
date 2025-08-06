/* 199. binary tree right side view */
// #: tree + BFS/DFS + recursion
import { TreeNode, Trees } from "../binary tree";

class src199 {
    // 1. BFS
    static rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const ans: number[] = [];
        const queue: TreeNode[] = [root];
        let i = 0;

        while (i < queue.length) {
            ans.push(queue[queue.length - 1].val);
            const levelLen = queue.length;

            while (i < levelLen) {
                const cur = queue[i++];

                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
            }
        }

        return ans;
    }

    // 2. recursive DFS
    private static treeTraversal(node: TreeNode | null, ans: number[], depth: number) {
        if (!node)
            return;

        if (depth === ans.length)
            ans.push(node.val);

        src199.treeTraversal(node.right, ans, depth + 1);
        src199.treeTraversal(node.left, ans, depth + 1);
    }

    static rightSideView2(root: TreeNode | null): number[] {
        const ans: number[] = [];

        src199.treeTraversal(root, ans, 0);

        return ans;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, 8]
        );

        // visible node from right side of the tree
        let ans1: number[] = src199.rightSideView(root);
        console.log(ans1.join(" "));

        let ans2: number[] = src199.rightSideView2(root);
        console.log(ans2.join(" "));
    }
}

src199.main();