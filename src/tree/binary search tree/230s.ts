/* 230. k-th smallest integer in a BST */
// #: bst + dfs + recursion
import { TreeNode, Trees } from "../binary tree";

class src230 {
    // 1. iterative DFS
    static kthSmallest(root: TreeNode | null, k: number): number {
        const stack: TreeNode[] = [];
        let cur: TreeNode | null = root;

        let [curMin, idx] = [-1, 0];

        while (stack.length > 0 || cur) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack.pop()!;
            curMin = cur.val; ++idx;

            if (idx === k) break;

            cur = cur.right;
        }

        return curMin;
    }

    // 2. recursive DFS
    private static dfs(node: TreeNode | null, ans: number[]): void {
        if (!node) return;

        src230.dfs(node.left, ans);

        --ans[0];

        if (ans[0] === 0) {
            ans[1] = node.val;
            return;
        }

        src230.dfs(node.right, ans);
    }

    static kthSmallest2(root: TreeNode | null, k: number): number {
        const ans: number[] = [0, 0];
        ans[0] = k;

        src230.dfs(root, ans);

        return ans[1];
    }

    // 3. morris traversal

    public static main(): void {
        // add binary search tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [4, 3, 5, 2, null]
        );
        const k: number = 4;

        // search for k-th smallest node val within BST
        let ans: number = src230.kthSmallest(root, k);
        console.log(ans);
    }
}

src230.main();