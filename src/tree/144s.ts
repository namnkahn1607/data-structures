/* 144. binary tree preorder traversal */
// #: tree + DFS/BFS
import { createBinaryTree, preorderTraverse, TreeNode } from "./binary tree";

class src144 {
    // 1. iterative
    static preorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];
        const stack: (TreeNode | null)[] = [];
        let cur: TreeNode | null = root;

        while (stack.length > 0 || cur) {
            if (cur) {
                ans.push(cur.val);
                stack.push(cur.right);
                cur = cur.left;
            } else {
                cur = stack.pop()!;
            }
        }

        return ans;
    }

    // 2. morris traversal

    public static main(): void {
        // add tree
        const root: TreeNode | null = createBinaryTree([1, 2, 3, null, 4, 5, null]);

        // preorder the binary tree
        let ans1: number[] = src144.preorderTraversal(root);
        console.log(ans1.join(" "));

        preorderTraverse(root);
    }
}

src144.main();

// more sols at: https://neetcode.io/solutions/binary-tree-preorder-traversal