/* 98. validate binary search tree */
// #: bst + DFS
import { TreeNode, BinaryTree } from "../binary tree";

class src98 {
    // 1. recursive DFS
    isValidBST(root: TreeNode | null): boolean {
        return this.validNode(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }

    private validNode(node: TreeNode | null, leftBound: number, rightBound: number): boolean {
        if (!node) return true;

        if (!(leftBound < node.val && node.val < rightBound))
            return false;

        return this.validNode(node.left, leftBound, node.val)
            && this.validNode(node.right, node.val, rightBound);
    }

    // 2. BFS

    public static main(): void {
        // add binary search tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
        );

        // check if valid bst
        let ans: boolean = new src98().isValidBST(root);
        console.log((ans) ? "true" : "false");
    }
}

src98.main();

// more sols at: https://neetcode.io/solutions/validate-binary-search-tree