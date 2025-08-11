/* 1161. maximum level sum of a binary tree */
// #: tree + BFS
import { TreeNode, Trees } from "../binary tree";

class src1161 {
    maxLevelSum(root: TreeNode | null): number {
        if (!root) return -1;

        const queue: TreeNode[] = [root];
        let [i, curLevel] = [0, 0];

        let [maxSum, resLevel] = [Number.MIN_SAFE_INTEGER, -1];

        while (i < queue.length) {
            ++curLevel;

            const levelLen = queue.length;
            let curSum = 0;

            while (i < levelLen) {
                const cur: TreeNode = queue[i++];

                curSum += cur.val;

                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
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
        const root: TreeNode | null = Trees.createBinaryTree(
            [989, null, 10250, 98693, -89388, null, null, null, -32127]
        );

        // search for level with the highest sum
        let ans: number = new src1161().maxLevelSum(root);
        console.log(ans);
    }
}

src1161.main();