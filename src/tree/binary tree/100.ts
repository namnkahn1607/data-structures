/* 100. same binary tree */
// #: tree + dfs
import { TreeNode, BinaryTree } from "../binary tree";
import { compareArray } from "../../packages";

class src100 {
    // 1. recursive DFS
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q)
            return true;
        else if (!p || !q || p.val !== q.val)
            return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }

    // 2. iterative DFS
    isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
        const pStack: (TreeNode | null)[] = [p];
        const qStack: (TreeNode | null)[] = [q];

        while (pStack.length > 0 && qStack.length > 0) {
            const pTop = pStack.pop();
            const qTop = qStack.pop();

            if (!pTop && !qTop)
                continue;

            if (!qTop || !pTop || pTop.val !== qTop.val)
                return false;

            pStack.push(pTop.right);
            pStack.push(pTop.left);

            qStack.push(qTop.right);
            qStack.push(qTop.left);
        }

        return pStack.length === 0 && qStack.length === 0;
    }

    public static main(): void {
        // add binary tree
        const p: TreeNode | null = BinaryTree.createBinaryTree([1, 2, 1]);
        const q: TreeNode | null = BinaryTree.createBinaryTree([1, 1, 2]);

        // compare 2 binary trees
        let ans1: boolean = new src100().isSameTree(p, q);
        console.log((ans1) ? "true" : "false");

        let ans2: boolean = new src100().isSameTree2(p, q);
        console.log((ans2) ? "true" : "false");

        console.log((compareArray(BinaryTree.convertToArray(p), BinaryTree.convertToArray(q))) ? "true" : "false");
    }
}

src100.main();

// linked problem: 572