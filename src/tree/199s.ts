/* 199. binary tree right side view */
// #: tree + BFS/DFS
import { TreeNode, Trees } from "./binary tree";

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

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, 8]
        );

        // visible node from right side of the tree
        let ans: number[] = src199.rightSideView(root);
        console.log(ans.join(" "));
    }
}

src199.main();