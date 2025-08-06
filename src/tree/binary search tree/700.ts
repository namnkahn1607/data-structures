/* 700. search in a binary search tree */
// #: bst + DFS + recursion
import { levelOrderTraverse, TreeNode, Trees } from "../binary tree";

class src700 {
    // 1. recursive DFS
    static searchBST(root: TreeNode | null, val: number): TreeNode | null {
        if (!root) return null;

        if (val < root.val)
            return src700.searchBST(root.left, val);
        else if (val > root.val)
            return src700.searchBST(root.right, val);

        return root;
    }

    // 2. iterative DFS
    static searchBST2(root: TreeNode | null, val: number): TreeNode | null {
        const stack: (TreeNode | null)[] = [];
        let cur: TreeNode | null = root;

        while (stack.length > 0 || cur) {
            if (cur) {
                if (cur.val === val)
                    return cur;

                stack.push(cur.right);
                cur = cur.left;

            } else {
                cur = stack.pop()!;
            }
        }

        return null;
    }

    public static main(): void {
        // add binary search tree
        const root: TreeNode | null = Trees.createBinaryTree(
            [4, 2, 7, 1, 3]
        );
        const val: number = 2;

        // search for the val-key within BST
        let ans: TreeNode | null = src700.searchBST(root, val);
        levelOrderTraverse(ans);
    }
}

src700.main();