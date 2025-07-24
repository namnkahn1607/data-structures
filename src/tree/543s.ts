/* 543. diameter of binary tree */
// #: tree + DFS + recursion
import { TreeNode, Trees } from "./binary tree";

class src543 {
    // 1. recursive DFS
    private static nodeMaxHeight(node: TreeNode | null, ans: { val: number }): number {
        if (!node) return -1;

        const left = 1 + this.nodeMaxHeight(node.left, ans);
        const right = 1 + this.nodeMaxHeight(node.right, ans);

        ans.val = Math.max(ans.val, left + right);

        return Math.max(left, right);
    }

    static diameterOfBinaryTree(root: TreeNode | null): number {
        let ans = { val: 0 };

        this.nodeMaxHeight(root, ans);

        return ans.val;
    }

    // 2. iterative DFS

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, null, 2, 3, 4, 5]
        );

        // calculate diameter of binary tree
        let ans1 = src543.diameterOfBinaryTree(root);
        console.log(ans1);
    }
}

src543.main();