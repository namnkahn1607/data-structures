/* 110. balanced binary tree */
// #: tree + DFS + recursion
import { Trees, TreeNode } from "../binary tree";

class src110 {
    // 1. recursive DFS
    isBalanced(root: TreeNode | null): boolean {
        return this.balancedNode(root) !== -1;
    }

    private balancedNode(node: TreeNode | null): number {
        if (!node) return 0;

        const left = this.balancedNode(node.left);

        if (left === -1) return -1;

        const right = this.balancedNode(node.right);

        if (right === -1) return -1;

        if (Math.abs(left - right) > 1)
            return -1;

        return 1 + Math.max(left, right);
    }

    // 2. iterative DFS
    isBalanced2(root: TreeNode | null): boolean {
        const stack: TreeNode[] = [];
        let [cur, lastVisit]: [TreeNode | null, TreeNode | null] = [root, null];

        const balanced: number[] = [];

        while (stack.length > 0 || cur) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                const peek = stack[stack.length - 1];

                if (peek.right && lastVisit !== peek.right) {
                    cur = peek.right;
                } else {
                    const right = (!peek.right) ? 0 : balanced.pop()!;
                    const left = (!peek.left) ? 0 : balanced.pop()!;

                    if (Math.abs(left - right) > 1)
                        return false;
                    else
                        balanced.push(1 + Math.max(left, right));

                    lastVisit = stack.pop()!;
                }
            }
        }

        return true;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [3, 9, 20, null, null, 15, 7]
        );

        // check if a balanced tree
        const solution = new src110();

        let ans1: boolean = solution.isBalanced(root),
            ans2: boolean = solution.isBalanced2(root);

        console.log((ans1) ? "true" : "false", (ans2) ? "true" : "false");
    }
}

src110.main();