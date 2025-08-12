/* 94. binary tree inorder traversal */
// #: tree + DFS
import { BinaryTree, TreeNode } from "../tree";

class src94 {
    // 1. iterative
    inorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];
        const stack: TreeNode[] = [];
        let cur: TreeNode | null = root;

        while (stack.length > 0 || cur) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack.pop()!;
            ans.push(cur.val);
            cur = cur.right;
        }

        return ans;
    }

    // 2. morris traversal

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        // inorder the binary tree
        let ans: number[] = new src94().inorderTraversal(root);
        console.log(ans.join(" "));

        console.log(BinaryTree.inorderTraverse(root).join(" "));
    }
}

src94.main();