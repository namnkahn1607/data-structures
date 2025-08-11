/* 1325. delete leaves with a given value */
// #: tree + DFS + recursion
import { TreeNode, Trees } from "../binary tree";

class src1325 {
    // 1. recursive DFS
    removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
        if (!root) return null;

        root.left = this.removeLeafNodes(root.left, target);
        root.right = this.removeLeafNodes(root.right, target);

        if (!root.left && !root.right && root.val === target)
            return null;

        return root;
    }

    // 2. iterative DFS
    removeLeafNodes2(root: TreeNode | null, target: number): TreeNode | null {
        const stack: TreeNode[] = [];
        let [cur, lastVisit]: [TreeNode | null, TreeNode | null] = [root, null];

        while (stack.length > 0 || cur) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack[stack.length - 1];

            if (cur.right && lastVisit !== cur.right) {
                cur = cur.right;
                continue;
            }

            stack.pop();

            if (!cur.left && !cur.right && cur.val === target) {
                if (stack.length === 0) return null;

                const parentNode = stack[stack.length - 1];

                if (cur === parentNode.left)
                    parentNode.left = null;
                else
                    parentNode.right = null;
            } else {
                lastVisit = cur;
            }

            cur = null;
        }

        return root;
    }

    public static main(): void {
        // add binary tree
        const root1: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, null, 2, 2, 5]
        );
        const target1: number = 2;

        const root2: TreeNode | null = Trees.createBinaryTree(
            [1, 2, 3, 5, 2, 2, 5]
        );
        const target2: number = 2;

        // remove all leaf nodes with targeted value
        let ans1: TreeNode | null = new src1325().removeLeafNodes(root1, target1);

        console.log(Trees.convertToArray(ans1).map(val => {
            return val === null ? "null" : val;
        }).join(" "));

        let ans2: TreeNode | null = new src1325().removeLeafNodes2(root2, target2);

        console.log(Trees.convertToArray(ans2).map(val => {
            return val === null ? "null" : val;
        }).join(" "));
    }
}

src1325.main();