/* data structures: Binary Search Tree */

import { TreeNode, Trees } from "./binary tree";

export class BST extends Trees {
    public static search(root: TreeNode | null, target: number): TreeNode | null {
        if (!root) return null;

        if (root.val > target)
            return this.search(root.left, target);
        else if (root.val < target)
            return this.search(root.right, target);

        return root;
    }
}