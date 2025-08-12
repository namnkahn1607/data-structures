/* 226. invert binary tree */
// #: tree + BFS + recursion
import { BinaryTree, TreeNode } from "../tree";

class src226 {
    // 1. iterative BFS
    invertTree(root: TreeNode | null): TreeNode | null {
        const queue: (TreeNode | null)[] = [root];
        let i = 0;

        while (i < queue.length) {
            const cur = queue[i++];

            if (cur) {
                [cur.left, cur.right] = [cur.right, cur.left];
                queue.push(cur.left);
                queue.push(cur.right);
            }
        }

        return root;
    }

    // 2. recursive DFS
    invertTree2(root: TreeNode | null): TreeNode | null {
        if (!root) return null;

        [root.left, root.right] = [root.right, root.left];
        this.invertTree2(root.left);
        this.invertTree2(root.right);

        return root;
    }

    // 3. iterative DFS
    invertTree3(root: TreeNode | null): TreeNode | null {
        const stack: (TreeNode | null)[] = [];
        let cur: TreeNode | null = root;

        while (stack.length > 0 || cur) {
            if (cur) {
                [cur.left, cur.right] = [cur.right, cur.left];
                stack.push(cur.left);
                cur = cur.right;
            } else {
                cur = stack.pop()!;
            }
        }

        return root;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7]
        );

        // invert the binary tree
        const solution = new src226();

        let ans1: TreeNode | null = solution.invertTree(root);
        console.log(BinaryTree.convertToArray(ans1).map(val => {
            return val === null ? "null" : val
        }).join(" "));

        let ans2: TreeNode | null = solution.invertTree2(root);
        console.log(BinaryTree.convertToArray(ans2).map(val => {
            return val === null ? "null" : val
        }).join(" "));

        let ans3: TreeNode | null = solution.invertTree3(root);
        console.log(BinaryTree.convertToArray(ans3).map(val => {
            return val === null ? "null" : val
        }).join(" "));
    }
}

src226.main();