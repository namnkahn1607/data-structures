/* 872. leaf similar tree */
// #: tree + dfs
import { BinaryTree, TreeNode } from "../binary tree";

class src872 {
    leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
        const [leaves1, leaves2] = [[], []];

        const collectLeaves = function(root: TreeNode | null, leaves: number[]): void {
            if (!root) return;

            collectLeaves(root.left, leaves);
            collectLeaves(root.right, leaves);

            if (!root.left && !root.right)
                leaves.push(root.val);
        };

        collectLeaves(root1, leaves1);
        collectLeaves(root2, leaves2);

        return leaves1.join(".") === leaves2.join(".");
    }

    public static main(): void {
        // add binary trees
        const root1: TreeNode | null = BinaryTree.createBinaryTree(
            [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]
        );

        const root2: TreeNode | null = BinaryTree.createBinaryTree(
            [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
        );

        // check if 2 trees have similar leaf nodes
        let ans: boolean = new src872().leafSimilar(root1, root2);
        console.log((ans) ? "true" : "false");
    }
}

src872.main();