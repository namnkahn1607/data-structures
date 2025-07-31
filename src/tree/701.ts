/* 701. insert into a binary search tree */
// #: bst + recursion
import { TreeNode, Trees } from "./binary tree";

class src701 {
    // 1. recursive
    static insertIntoBST(root: TreeNode | null, x: number): TreeNode | null {
        if (!root) return new TreeNode(x);

        if (x < root.val)
            root.left = this.insertIntoBST(root.left, x);
        else
            root.right = this.insertIntoBST(root.right, x);

        return root;
    }

    // 2. iterative
    static insertIntoBST2(root: TreeNode | null, x: number): TreeNode | null {
        let [pre, cur]: [TreeNode | null, TreeNode | null] = [null, root];

        while (cur) {
            pre = cur;

            if (x > cur.val)
                cur = cur.right;
            else
                cur = cur.left;
        }

        const newNode: TreeNode | null = new TreeNode(x);

        if (!pre) return newNode;

        if (x < pre.val)
            pre.left = newNode;
        else
            pre.right = newNode;

        return root;
    }

    public static main(): void {
        // add BST & insert value
        const root: TreeNode | null = Trees.createBinaryTree(
            [5,3,6,null,4,null,10,null,null,7]
        );
        const x1: number = 2;
        const x2: number = 9;

        // add x-val node into that BST
        let ans1: TreeNode | null = src701.insertIntoBST(root, x1);
        console.log(Trees.convertToArray(ans1).map(val => {
            return val === null ? "null" : val
        }).join(" "));

        let ans2: TreeNode | null = src701.insertIntoBST2(root, x2);
        console.log(Trees.convertToArray(ans2).map(val => {
            return val === null ? "null" : val
        }).join(" "));
    }
}

src701.main();