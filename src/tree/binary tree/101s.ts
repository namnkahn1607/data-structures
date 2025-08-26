/* 101. symmetric binary tree */
// #: tree + dfs
import { TreeNode, BinaryTree } from "../binary tree";

class src101 {
    // 1. recursive DFS
    isSymmetric(root: TreeNode | null): boolean {
        const isMirrorNode = function(node1: TreeNode | null, node2: TreeNode | null): boolean {
            if (!node1 && !node2)
                return true;

            if (!node1 || !node2 || node1.val !== node2.val)
                return false;

            return isMirrorNode(node1.left, node2.right)
                && isMirrorNode(node1.right, node2.left);
        };

        return isMirrorNode(root, root);
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