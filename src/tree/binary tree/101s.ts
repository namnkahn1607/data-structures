/* 101. symmetric binary tree */
// #: tree + DFS/BFS
import { TreeNode, BinaryTree } from "../tree";

class src101 {
    // 1. recursive DFS
    isSymmetric(root: TreeNode | null): boolean {
        return this.palindromeTree(root, root);
    }

    private palindromeTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
        if (!node1 && !node2)
            return true;

        if (!node1 || !node2 || node1.val !== node2.val)
            return false;

        return this.palindromeTree(node1.left, node2.right)
            && this.palindromeTree(node1.right, node2.left);
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 2, 2, null, 2]
        );

        // check if symmetric tree
        let ans: boolean = new src101().isSymmetric(root);
        console.log((ans) ? "true" : "false");
    }
}

src101.main();