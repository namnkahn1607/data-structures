/* 144. binary tree preorder traversal */
// #: tree + DFS
import { Trees, preorderTraverse, TreeNode } from "../binary tree";

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
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        // preorder the binary tree
        let ans: number[] = src144.preorderTraversal(root);
        console.log(ans.join(" "));

        preorderTraverse(root);
    }
}

src144.main();

// more sols at: https://neetcode.io/solutions/binary-tree-preorder-traversal