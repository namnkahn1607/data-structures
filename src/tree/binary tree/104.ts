/* 104. maximum depth of binary tree */
// #: tree + BFS/DFS + divide n conquer
import { TreeNode, BinaryTree } from "../binary tree";

class src104 {
    // 1. BFS
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const queue: TreeNode[] = [root];
        let i = 0;

        let levelLen = 1, depth = 0;

        while (i < queue.length) {
            const cur = queue[i++];
            --levelLen;

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);

            if (levelLen === 0) {
                ++depth;
                levelLen = queue.length - i;
            }
        }

        return depth;
    }

    // 2. divide and conquer
    maxDepth2(root: TreeNode | null): number {
        if (!root) return 0;

        return 1 + Math.max(
            this.maxDepth2(root.left),
            this.maxDepth2(root.right)
        );
    }

    // 3. iterative DFS
    maxDepth3(root: TreeNode | null): number {
        const stack: [TreeNode | null, number][] = [[root, 0]];
        let depth = 0;

        while (stack.length > 0) {
            let cur = stack.pop()!;

            if (cur[0]) {
                stack.push([cur[0].right, 1 + cur[1]]);
                stack.push([cur[0].left, 1 + cur[1]]);
            } else {
                depth = Math.max(depth, cur[1]);
            }
        }

        return depth;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, null, null, 4]
        );

        // calculate binary tree's max depth
        const solution = new src104();

        let ans1: number = solution.maxDepth(root),
            ans2: number = solution.maxDepth2(root),
            ans3: number = solution.maxDepth3(root);
        console.log(`${ans1} ${ans2} ${ans3}`);
    }
}

src104.main();