/* 1448. count good nodes in binary tree */
// #: tree + dfs
import { TreeNode, BinaryTree } from "../binary tree";

class src1448 {
    // 1. recursive DFS
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;

        let ans: number = 0;

        const isGood = function(node: TreeNode | null, mx: number): void {
            if (!node) return;

            if (node.val >= mx) {
                ++ans;
                mx = Math.max(mx, node.val);
            }

            isGood(node.left, mx);
            isGood(node.right, mx);
        }

        isGood(root, root.val);

        return ans;
    }

    // 2. iterative DFS
    goodNodes2(root: TreeNode | null): number {
        if (!root) return 0;

        const stack: [TreeNode | null, number][] = [];
        let cur: [TreeNode | null, number] = [root, root.val];
        let ans: number = 0;

        while (stack.length > 0 || cur[0]) {
            if (cur[0]) {
                if (cur[0].val >= cur[1])
                    ++ans;

                cur[1] = Math.max(cur[0].val, cur[1]);
                stack.push([cur[0].right, cur[1]]);
                cur[0] = cur[0].left;

            } else {
                cur = stack.pop()!;
            }
        }

        return ans;
    }

    public static main(): void {
        // create binary tree
        const root: TreeNode | null = BinaryTree.createBinaryTree(
            [2,4,4,4,null,1,3,null,null,5,null,null,null,null,5,4,4]
        );

        // calculate number of good nodes within tree
        let ans1: number = new src1448().goodNodes(root),
            ans2: number = new src1448().goodNodes2(root);
        console.log(`recursive: ${ans1}, iterative: ${ans2}`);
    }
}

src1448.main();