/* 1372. longest zigzag path in binary tree */
// #: tree + dfs + dp
import { BinaryTree, TreeNode } from "../binary tree";

class src1372 {
    longestZigZag(root: TreeNode | null): number {
        let ans = 0;

        const dfs = function(node: TreeNode | null, nextDir: boolean): number {
            if (!node) return 0;

            const left = dfs(node.left, true);
            const right = dfs(node.right, false);

            ans = Math.max(ans, left, right);

            return 1 + ((nextDir) ? right : left);
        };

        dfs(root, false);
        dfs(root, true);

        return ans;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 1, 1, null, 1, null, null, 1, 1, null, 1]
        );

        // calculate longest zigzag in tree
        let ans: number = new src1372().longestZigZag(root);
        console.log(ans);
    }
}

src1372.main();