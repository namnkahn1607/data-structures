/* 145. binary tree postorder traversal */
// #: tree + DFS
import { BinaryTree, TreeNode } from "../tree";

class src145 {
    // 1. invert tree + reverse output
    postorderTraversal(root: TreeNode | null): number[] {
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

    // 2. iterative DFS - I
    postorderTraversal2(root: TreeNode | null): number[] {
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

    // 3. iterative DFS - II
    postorderTraversal3(root: TreeNode | null): number[] {
        const stack: (TreeNode | null)[] = [root];
        const visit: boolean[] = [false];
        const ans: number[] = [];

        while (stack.length > 0) {
            const cur = stack.pop();
            const v = visit.pop();

            if (cur) {
                if (v) {
                    ans.push(cur.val);
                } else {
                    stack.push(cur);
                    visit.push(true);

                    stack.push(cur.right);
                    visit.push(false);

                    stack.push(cur.left);
                    visit.push(false);
                }
            }
        }

        return ans;
    }

    // 4. morris traversal

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10]
        );

        // postorder the binary tree
        const solution = new src145();

        let ans1 = solution.postorderTraversal(root);
        console.log(ans1.join(" "));

        let ans2 = solution.postorderTraversal2(root);
        console.log(ans2.join(" "));

        let ans3 = solution.postorderTraversal3(root);
        console.log(ans3.join(" "));

        console.log(BinaryTree.postorderTraverse(root).join(" "));
    }
}

src145.main();