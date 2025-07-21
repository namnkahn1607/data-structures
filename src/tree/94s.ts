/* 94. binary tree inorder traversal */
// #: tree + DFS
import { Trees, TreeNode, inorderTraverse } from "./binary tree";

class src94 {
    // 1. iterative
    static inorderTraversal(root: TreeNode | null): number[] {
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
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        // inorder the binary tree
        let ans: number[] = src94.inorderTraversal(root);
        console.log(ans.join(" "));

        inorderTraverse(root);
    }
}

src94.main();