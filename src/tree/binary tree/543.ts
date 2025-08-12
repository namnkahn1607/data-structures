/* 543. diameter of binary tree */
// #: tree + DFS + recursion
import { TreeNode, BinaryTree } from "../tree";

class src543 {
    // 1. recursive DFS
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = { val: 0 };

        this.nodeMaxHeight(root, diameter);

        return diameter.val;
    }

    private nodeMaxHeight(node: TreeNode | null, diameter: { val: number }): number {
        if (!node) return 0;

        const left = this.nodeMaxHeight(node.left, diameter);
        const right = this.nodeMaxHeight(node.right, diameter);

        diameter.val = Math.max(diameter.val, left + right);

        return 1 + Math.max(left, right);
    }

    // 2. iterative DFS
    diameterOfBinaryTree2(root: TreeNode | null): number {
        const stack: TreeNode[] = [];
        let [cur, lastVisit]: [TreeNode | null, TreeNode | null] = [root, null];

        const height: number[] = [];
        let diameter = 0;

        while (stack.length > 0 || cur) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                const peek = stack[stack.length - 1];

                if (peek.right && lastVisit !== peek.right) {
                    cur = peek.right;
                } else {
                    const right = (!peek.right) ? 0 : height.pop()!;
                    const left = (!peek.left) ? 0 : height.pop()!;

                    diameter = Math.max(diameter, left + right);
                    height.push(1 + Math.max(left, right));

                    lastVisit = stack.pop()!;
                }
            }
        }

        return diameter;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [2, null, 4]
        );

        // calculate diameter of binary tree
        const solution = new src543();

        let ans1 = solution.diameterOfBinaryTree(root),
            ans2 = solution.diameterOfBinaryTree2(root);

        console.log(`rDFS: ${ans1}, iDFS: ${ans2}`)
    }
}

src543.main();