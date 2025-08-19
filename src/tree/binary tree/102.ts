/* 102. binary tree level order traversal */
// #: tree + BFS/DFS
import { TreeNode, BinaryTree } from "../binary tree";

class src102 {
    // 1. BFS
    levelOrder(root: TreeNode | null): number[][] {
        if (root === null) return [];

        const ans: number[][] = [];
        let level: number[] = [];

        const queue: TreeNode[] = [root];
        let [i, levelLen] = [0, 1];

        while (i < queue.length) {
            const cur = queue[i++];
            level.push(cur.val);
            --levelLen;

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);

            if (levelLen === 0) {
                ans.push(level);
                level = [];
                levelLen = queue.length - i;
            }
        }

        return ans;
    }

    // 2. recursive DFS
    levelOrder2(root: TreeNode | null): number[][] {
        const ans: number[][] = [];

        this.levelTraversal(root, ans, 0);

        return ans;
    }

    private levelTraversal(node: TreeNode | null, ans: number[][], level: number): void {
        if (!node) return;

        if (level === ans.length)
            ans.push([]);

        ans[level].push(node.val);

        this.levelTraversal(node.left, ans, level + 1);
        this.levelTraversal(node.right, ans, level + 1);
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