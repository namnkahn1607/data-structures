/* algorithms: Backtracking on Binary Trees */

import { BinaryTree, TreeNode } from "./binary tree";

class TreeMaze {
    // determine if a non-zero root to leaf path exists in tree
    nonZeroPath(root: TreeNode | null): boolean {
        if (!root || root.val === 0)
            return false;

        if (!root.left && !root.right)
            return true;

        if (this.nonZeroPath(root.left))
            return true;

        return this.nonZeroPath(root.right);
    }

    // search for a non-zero root to leaf path in tree
    nonZeroPath2(root: TreeNode | null): number[] {
        const ans: number[] = [];

        const dfs = function(node: TreeNode | null): boolean {
            if (!node || node.val === 0)
                return false;

            ans.push(node.val);

            if (!node.left && !node.right)
                return true;

            if (dfs(node.left)) return true;
            if (dfs(node.right)) return true;

            ans.pop();

            return false;
        }

        dfs(root);

        return ans;
    }

    // search for ALL non-zero root to leaf path in tree
    nonZeroPath3(root: TreeNode | null): number[][] {
        const ans: number[][] = [];
        const path: number[] = [];

        const dfs = function(node: TreeNode | null): void {
            if (!node || node.val === 0)
                return;

            path.push(node.val);

            if (!node.left && !node.right) {
                ans.push([...path]);
                path.pop();
                return;
            }

            dfs(node.left);
            dfs(node.right);
            path.pop();
        }

        dfs(root);

        return ans;
    }

    public static main(): void {
        // add binary trees
        const args: (number | null)[][] = [
            [4, 0, 1, null, 7, 2, 0],
            [4, 0, 1, 0, 7, 2, 8, null, null, null, null, 3, 0, 9, 2, null, null, null, null, 0],
            [4, 0, 1, null, 7, 2, 3, null, null, 0, 8],
        ];

        const rootList: (TreeNode | null)[] = []

        for (const arg of args)
            rootList.push(BinaryTree.createBinaryTree(arg));

        // all operations of TreeMaze on tree roots
        const solution = new TreeMaze();

        for (const root of rootList) {
            console.log(solution.nonZeroPath(root));

            console.log(solution.nonZeroPath2(root).join(" "));

            let ans: number[][] = solution.nonZeroPath3(root);

            for (const vec of ans)
                console.log(vec.join(" "));

            console.log("---")
        }
    }
}

TreeMaze.main();