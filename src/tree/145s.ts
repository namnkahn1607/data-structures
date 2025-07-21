/* 145. binary tree postorder traversal */
// #: tree + DFS
import { Trees, postorderTraverse, TreeNode } from "./binary tree";

class src145 {
    // 1. invert tree + reverse output
    static postorderTraversal(root: TreeNode | null): number[] {
        const ans: number[] = [];
        const stack: (TreeNode | null)[] = [];
        let cur: TreeNode | null = root;

        while (stack.length > 0 || cur) {
            if (cur) {
                ans.push(cur.val);
                stack.push(cur.left);
                cur = cur.right;
            } else {
                cur = stack.pop()!;
            }
        }

        return ans.reverse();
    }

    // 2. iterative

    // 3. morris traversal

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        // postorder the binary tree
        let ans = src145.postorderTraversal(root);
        console.log(ans.join(" "));

        postorderTraverse(root);
    }
}

src145.main();