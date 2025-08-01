/* structy-56: tree includes */
// #: tree + recursion
import { TreeNode, Trees } from "./binary tree";

class strty56 {
    static treeIncludes(root: TreeNode | null, target: number): boolean {
        if (!root) return false;

        if (root.val === target)
            return true;

        return this.treeIncludes(root.left, target) || this.treeIncludes(root.right, target);
    }

    public static main(): void {
        // add binary tree & target
        const base: number = 'a'.charCodeAt(0);
        const root: TreeNode | null = Trees.createBinaryTree(
            ['a', 'b', 'c', 'd', 'e'].map(val => {
                return val.charCodeAt(0) - base
            })
        );
        const key: string = 'f';
        const target: number = key.charCodeAt(0) - base;

        // search for the target within the tree
        let ans: boolean = strty56.treeIncludes(root, target);
        console.log(ans);
    }
}

strty56.main();