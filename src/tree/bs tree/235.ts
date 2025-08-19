/* 235. lowest common ancestor of a BST */
// #: bst + DFS
import { TreeNode, BinaryTree } from "../binary tree";
import { BST } from "../bs tree";

class src235 {
    // 1. recursion
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (!root || !p || !q) return null;

        if (root.val < Math.min(p.val, q.val))
            return this.lowestCommonAncestor(root.right, p, q);
        else if (root.val > Math.max(p.val, q.val))
            return this.lowestCommonAncestor(root.left, p, q);

        return root;
    }

    // 2. iterative
    lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (!root || !p || !q) return null;

        const [a, b] = [Math.min(p.val, q.val), Math.max(p.val, q.val)];
        let cur: TreeNode = root;

        while (true) {
            if (cur.val < a)
                cur = cur.right!;
            else if (cur.val > b)
                cur = cur.left!;
            else
                break;
        }

        return cur;
    }

    public static main(): void {
        // add binary search tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
        );

        const p: TreeNode | null = BST.search(root, 2);
        const q: TreeNode | null = BST.search(root, 8);

        // search for LCA of p and q in BST
        let ans1: TreeNode | null = new src235().lowestCommonAncestor(root, p, q);
        console.log(ans1, '\n');

        let ans2: TreeNode | null = new src235().lowestCommonAncestor2(root, p, q);
        console.log(ans2, '\n');
    }
}

src235.main();