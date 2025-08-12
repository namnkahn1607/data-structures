/* 450. delete node in a BST */
// #: bst + DFS + recursion
import { TreeNode, BinaryTree } from "../tree";

class src450 {
    deleteNode(root: TreeNode | null, key: number): TreeNode | null {
        if (!root) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
            return root;
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
            return root;
        }

        if (!root.right)
            return root.left;

        let cur: TreeNode = root.right;

        while (cur.left)
            cur = cur.left;

        cur.left = root.left;

        return root.right;
    }

    public static main(): void {
        // add binary search tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [5, 3, 6, 2, 4, null, null, 7]
        );
        const key: number = 3;

        // delete the key-val node within BST
        let ans: TreeNode | null = new src450().deleteNode(root, key);

        console.log(BinaryTree.convertToArray(ans).map(val => {
            return val === null ? "null" : val;
        }).join(" "));
    }
}

src450.main();