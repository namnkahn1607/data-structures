/* structy-58: max root to leaf path sum */
// #: tree + dfs
import { BinaryTree, TreeNode } from "./binary tree";

class strty58 {
    // 1. recursive DFS
    maxPathSum(root: TreeNode | null): number {
        if (!root) return Number.MIN_SAFE_INTEGER;

        if (!root.left && !root.right)
            return root.val;

        return root.val + Math.max(
            this.maxPathSum(root.left),
            this.maxPathSum(root.right)
        );
    }

    // 2. iterative DFS
    maxPathSum2(root: TreeNode | null): number | undefined {
        const stack: TreeNode[] = [];
        let [cur, lastVisit]: [TreeNode | null, TreeNode | null] = [root, null];

        const nodePathSum: number[] = [];

        while (stack.length > 0 || cur) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                const peek = stack[stack.length - 1];

                if (peek.right && lastVisit !== peek.right)
                    cur = peek.right;
                else {
                    if (!peek.left && !peek.right)
                        nodePathSum.push(peek.val);
                    else {
                        const right = (!peek.right) ? Number.MIN_SAFE_INTEGER : nodePathSum.pop()!;
                        const left = (!peek.left) ? Number.MIN_SAFE_INTEGER : nodePathSum.pop()!;

                        nodePathSum.push(peek.val + Math.max(left, right));
                    }

                    lastVisit = stack.pop()!;
                }
            }
        }

        return (nodePathSum.length > 0) ? nodePathSum.pop() : undefined;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [5, 11, 54, 20, 15, null, null, null, null, 1, 3]
        );

        // calculate maxima height-path sum
        const solution = new strty58();

        let ans1: number = solution.maxPathSum(root),
            ans2: number | undefined = solution.maxPathSum2(root);
        console.log(`recursive: ${ans1}, iterative: ${ans2}`);
    }
}

strty58.main();