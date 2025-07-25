/* 110. balanced binary tree */
// #: tree + DFS + recursion
import { Trees, TreeNode } from "./binary tree";

class src110 {
    public static balancedNode(node: TreeNode | null): number {
        if (!node) return 0;

        const left = this.balancedNode(node.left);

        if (left === -1) return -1;

        const right = this.balancedNode(node.right);

        if (right === -1) return -1;

        if (Math.abs(left - right) > 1)
            return -1;

        return 1 + Math.max(left, right);
    }

    static isBalanced(root: TreeNode | null): boolean {
        return this.balancedNode(root) !== -1;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [3, 9, 20, null, null, 15, 7]
        );

        // check if a balanced tree
        let ans1: boolean = src110.isBalanced(root);
        console.log((ans1) ? "true" : "false");
    }
}

src110.main();