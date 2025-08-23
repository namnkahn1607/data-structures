/* 1161. maximum level sum of a binary tree */
// #: tree + bfs
import { TreeNode, BinaryTree } from "../binary tree";
import { Queue } from "datastructures-js";

class src1161 {
    maxLevelSum(root: TreeNode | null): number {
        if (!root) return -1;

        const queue = new Queue<TreeNode>([root]);
        let [curLevel, maxSum, resLevel] = [0, Number.MIN_SAFE_INTEGER, -1];

        while (!queue.isEmpty()) {
            ++curLevel;
            const levelLen = queue.size();
            let curSum = 0;

            for (let i = 0; i < levelLen; ++i) {
                const cur: TreeNode = queue.pop()!;

                curSum += cur.val;

                if (cur.left) queue.enqueue(cur.left);
                if (cur.right) queue.enqueue(cur.right);
            }

            if (curSum > maxSum) {
                maxSum = curSum;
                resLevel = curLevel;
            }
        }

        return resLevel;
    }

    public static main(): void {
        // add binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [989, null, 10250, 98693, -89388, null, null, null, -32127]
        );

        // search for level with the highest sum
        let ans: number = new src1161().maxLevelSum(root);
        console.log(ans);
    }
}

src1161.main();