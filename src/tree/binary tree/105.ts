/* 105. construct binary tree from preorder and inorder traversal */
// #: tree + dfs + hash
import { BinaryTree, TreeNode } from "../binary tree";

class src105 {
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        const map = new Map<number, number>();

        for (let i = 0; i < preorder.length; ++i)
            map.set(inorder[i], i);

        let preIdx = 0;

        const createNode = function(l: number, r: number): TreeNode | null {
            if (l > r) return null;

            const rootVal = preorder[preIdx++];
            const root = new TreeNode(rootVal);

            const mid = map.get(rootVal)!;
            root.left = createNode(l, mid - 1);
            root.right = createNode(mid + 1, r);

            return root;
        };

        return createNode(0, inorder.length - 1);
    }

    public static main(): void {
        // add preorder & inorder array
        const preorder: number[] = [1, 2, 3, 4];
        const inorder: number[] = [2, 1, 3, 4];

        // build a binary tree
        let ans: TreeNode | null = new src105().buildTree(preorder, inorder);

        console.log(BinaryTree.convertToArray(ans).map(val => {
            return (val === null) ? "null" : val
        }).join(" "));
    }
}

src105.main()

// more optimal sol: https://neetcode.io/solutions/construct-binary-tree-from-preorder-and-inorder-traversal