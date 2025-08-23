/* 572. subtree of another tree */
// #: tree + dfs
import { BinaryTree, TreeNode } from "../binary tree";

class src572 {
    // 1. recursive DFS
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root) return false;

        if (this.sameSubtree(root, subRoot))
            return true;

        return this.isSubtree(root.left, subRoot)
            || this.isSubtree(root.right, subRoot);
    }

    private sameSubtree(node1: TreeNode | null, node2: TreeNode | null): boolean {
        if (!node1 && !node2)
            return true;

        if (!node1 || !node2 || node1.val !== node2.val)
            return false;

        return this.sameSubtree(node1.left, node2.left)
            && this.sameSubtree(node1.right, node2.right);
    }

    // 2. serialization & pattern matching

    public static main(): void {
        // add binary tree
        const root = BinaryTree.createBinaryTree([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2]);
        const subRoot = BinaryTree.createBinaryTree([1,null,1,null,1,null,1,null,1,null,1,2]);

        // check if subRoot subtree of root
        let ans: boolean = new src572().isSubtree(root, subRoot);
        console.log((ans) ? "true" : "false");
    }
}

src572.main();

// more sols at: https://neetcode.io/solutions/subtree-of-another-tree
// linked problems: 100