/* 102. binary tree level order traversal */
// #: tree + dfs/bfs
import { TreeNode, BinaryTree } from "../binary tree";
import { Queue } from "datastructures-js";

class src102 {
    // 1. BFS
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const ans: number[][] = [];
        let level: number[] = [];

        const queue = new Queue<TreeNode>([root]);
        let levelLen = queue.size();

        while (!queue.isEmpty()) {
            const cur: TreeNode = queue.pop()!;
            level.push(cur.val);
            --levelLen;

            if (cur.left) queue.enqueue(cur.left);
            if (cur.right) queue.enqueue(cur.right);

            if (levelLen === 0) {
                ans.push(level);
                level = [];
                levelLen = queue.size();
            }
        }

        return ans;
    }

    // 2. recursive DFS
    levelOrder2(root: TreeNode | null): number[][] {
        const ans: number[][] = [];

        const levelTraversal = function(node: TreeNode | null, level: number): void {
            if (!node) return;

            if (level === ans.length)
                ans.push([]);

            ans[level].push(node.val);

            levelTraversal(node.left, level + 1);
            levelTraversal(node.right, level + 1);
        };

        levelTraversal(root, 0);

        return ans;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [3, 9, 20, null, null, 15, 7]
        );

        // level order traverse the tree
        let ans1: number[][] = new src102().levelOrder(root);

        for (const vec of ans1)
            console.log(vec.join(" "));

        let ans2: number[][] = new src102().levelOrder2(root);

        for (const vec of ans2)
            console.log(vec.join(" "));

        console.log(BinaryTree.levelOrder(root).join(" "));
    }
}

src102.main();