/* 230. k-th smallest integer in a BST */
// #: bst + dfs + recursion
import { TreeNode, Trees } from "../binary tree";

class src230 {
    // 1. iterative DFS
    kthSmallest(root: TreeNode | null, k: number): number {
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
    kthSmallest2(root: TreeNode | null, k: number): number {
        const ans: number[] = [0, 0];
        ans[0] = k;

        this.dfs(root, ans);

        return ans[1];
    }

    private dfs(node: TreeNode | null, ans: number[]): void {
        if (!node) return;

        this.dfs(node.left, ans);

        --ans[0];

        if (ans[0] === 0) {
            ans[1] = node.val;
            return;
        }

        this.dfs(node.right, ans);
    }

    // 3. morris traversal

    public static main(): void {
        // add binary search tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [4, 3, 5, 2, null]
        );
        const k: number = 4;

        // search for k-th smallest node val within BST
        const solution = new src230();

        let ans1: number = solution.kthSmallest(root, k),
            ans2: number = solution.kthSmallest2(root, k);

        console.log(`iterative: ${ans1}, recursive: ${ans2}`);
    }
}

src230.main();