import { BinaryTree, TreeNode } from "../tree";

class Test {
    revealAllPaths(root: TreeNode | null): number[][] {
        const ans: number[][] = [];

        this.nodeTraverse(root, [], ans);

        return ans;
    }

    private nodeTraverse(node: TreeNode | null, path: number[], ans: number[][]): void {
        if (!node) return;

        path.push(node.val);

        if (!node.left && !node.right)
            ans.push([...path]);

        this.nodeTraverse(node.left, path, ans);
        this.nodeTraverse(node.right, path, ans);
        path.pop();
    }

    public static main(): void {
        const root = BinaryTree.createBinaryTree(
            [1, 2, 3, 4, 5, 6, 7, 8, null, null, 10]
        );

        let ans: number[][] = new Test().revealAllPaths(root);

        for (const vec of ans)
            console.log(vec.join(" "));
    }
}

Test.main();