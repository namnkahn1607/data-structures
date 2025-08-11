/* 1448. count good nodes in binary tree */
// #: tree + DFS + recursion
import { TreeNode, Trees } from "../binary tree";

class src1448 {
    // 1. recursive DFS
    private isGood(node: TreeNode | null, ans: number[], mx: number): void {
        if (!node) return;

        if (node.val >= mx) {
            ++ans[0];
            mx = Math.max(mx, node.val);
        }

        this.isGood(node.left, ans, mx);
        this.isGood(node.right, ans, mx);
    }

    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;

        const ans: number[] = [0];

        this.isGood(root, ans, root.val);

        return ans[0];
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
        const root: TreeNode | null = Trees.createBinaryTree(
            [2,4,4,4,null,1,3,null,null,5,null,null,null,null,5,4,4]
        );

        // calculate number of good nodes within tree
        let ans1: number = new src1448().goodNodes(root),
            ans2: number = new src1448().goodNodes2(root);
        console.log(`recursive: ${ans1}, iterative: ${ans2}`);
    }
}

src1448.main();