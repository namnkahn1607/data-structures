/* 102. binary tree level order traversal */
// #: tree + BFS
import { TreeNode, Trees } from "./binary tree";

class src102 {
    static levelOrder(root: TreeNode | null): number[][] {
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

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [3,9,20,null,null,15,7]
        );

        // level order traverse the tree
        let ans: number[][] = src102.levelOrder(root);

        for (const vec of ans)
            console.log(vec.join(" "));
    }
}

src102.main();