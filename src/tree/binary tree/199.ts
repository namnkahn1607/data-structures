/* 199. binary tree right side view */
// #: tree + dfs/bfs
import { TreeNode, BinaryTree } from "../binary tree";
import { Deque } from "datastructures-js";

class src199 {
    // 1. BFS
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const ans: number[] = [];
        const deque = new Deque<TreeNode>([root]);

        while (!deque.isEmpty()) {
            const levelLen = deque.size();
            ans.push(deque.back().val);

            for (let i = 0; i < levelLen; ++i) {
                const cur: TreeNode = deque.popFront();

                if (cur.left) deque.pushBack(cur.left);
                if (cur.right) deque.pushBack(cur.right);
            }
        }

        return ans;
    }
    
    // 2. recursive DFS
    rightSideView2(root: TreeNode | null): number[] {
        const ans: number[] = [];

        this.treeTraversal(root, ans, 0);

        return ans;
    }

    private treeTraversal(node: TreeNode | null, ans: number[], depth: number) {
        if (!node)
            return;

        if (depth === ans.length)
            ans.push(node.val);

        this.treeTraversal(node.right, ans, depth + 1);
        this.treeTraversal(node.left, ans, depth + 1);
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, null, 8]
        );

        // visible node from right side of the tree
        let ans1: number[] = new src199().rightSideView(root);
        console.log(ans1.join(" "));

        let ans2: number[] = new src199().rightSideView2(root);
        console.log(ans2.join(" "));
    }
}

src199.main();