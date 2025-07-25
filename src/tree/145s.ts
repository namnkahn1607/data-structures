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
    static postorderTraversal2(root: TreeNode | null): number[] {
        const ans: number[] = [];
        const stack: TreeNode[] = [];
        let [cur, lastVisit]: [TreeNode | null, TreeNode | null] = [root, null];

        while (stack.length > 0 || cur) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                const peek = stack[stack.length - 1];

                if (peek.right && lastVisit !== peek.right) {
                    cur = peek.right;
                } else {
                    ans.push(peek.val);
                    lastVisit = stack.pop()!;
                }
            }
        }

        return ans;
    }

    // 3. morris traversal

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        // postorder the binary tree
        let ans1 = src145.postorderTraversal(root);
        console.log(ans1.join(" "));

        let ans2 = src145.postorderTraversal2(root);
        console.log(ans2.join(" "));

        postorderTraverse(root);
    }
}

src145.main();