/* 104. maximum depth of binary tree */
// #: tree + BFS/DFS + divide n conquer
import { TreeNode, Trees } from "./binary tree";

class src104 {
    // 1. BFS
    static maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const queue: TreeNode[] = [root];
        let i = 0;

        let levelLen = 1, depth = 0;

        while (i < queue.length) {
            const cur = queue[i++];
            --levelLen;

            if (cur.left)
                queue.push(cur.left);

            if (cur.right)
                queue.push(cur.right);

            if (levelLen === 0) {
                ++depth;
                levelLen = queue.length - i;
            }
        }

        return depth;
    }

    // 2. divide and conquer


    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, null, null, 4]
        );

        // calculate binary tree's max depth
        let ans1 = src104.maxDepth(root);
        console.log(ans1);
    }
}

src104.main();